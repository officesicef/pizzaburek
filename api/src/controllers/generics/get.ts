import { NextFunction, Request, Response } from 'express';
import { ParsedQs } from 'qs';

import db from '@/db';
import { CustomError } from '@/errors';
import { common, filters } from '@/utils';
import { errorMessages, statusCodes } from '@/constants';

const RECORDS_PER_PAGE = 10;
const INITIAL_PAGE = 0;

interface IParams {
  model?: string;
}

export default async <T>(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<T[] | void> => {
  try {
    const { model }: IParams = req.params;
    const { sortFilters, page, pageCount }: ParsedQs = req.query;

    const recordsPerPage: number =
      parseInt(pageCount?.toString() ?? '', 10) || RECORDS_PER_PAGE;
    const currentPage: number =
      parseInt(page?.toString() ?? '', 10) || INITIAL_PAGE;

    const foundEntities: T[] = await common
      .getKeyValue(common.singular(model))(db)
      .findMany({
        ...(sortFilters
          ? { orderBy: filters.getParsedSortFilters(sortFilters) }
          : {}),
        skip: currentPage,
        ...(pageCount ? { take: recordsPerPage } : {}),
      });

    if (!foundEntities || foundEntities.length <= 0) {
      return next(
        new CustomError(errorMessages.NOT_FOUND, statusCodes.NOT_FOUND)
      );
    }

    return res.status(statusCodes.OK_RESULT).json(foundEntities).end();
  } catch (error) {
    return next(error);
  }
};

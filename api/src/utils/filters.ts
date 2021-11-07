import { ParsedQs } from 'qs';

const getParsedSortFilters = (
  sortFilters: string | ParsedQs | string[] | ParsedQs[]
): any[] => {
  if (sortFilters instanceof Array) {
    return sortFilters.map((order: string | ParsedQs) =>
      JSON.parse(order?.toString() ?? '')
    );
  }

  if (sortFilters) {
    return JSON.parse(sortFilters?.toString() ?? '');
  }

  return [];
};

const getDateFilters = (
  field: string,
  fromDate?: string,
  toDate?: string
): Record<string, unknown> => ({
  ...(fromDate && !toDate ? { [field]: { gte: new Date(fromDate) } } : {}),
  ...(!fromDate && toDate ? { [field]: { lte: new Date(toDate) } } : {}),
  ...(fromDate && toDate
    ? {
        AND: [
          {
            [field]: {
              gte: new Date(fromDate),
            },
          },
          {
            [field]: {
              lte: new Date(toDate),
            },
          },
        ],
      }
    : {}),
});

export default { getParsedSortFilters, getDateFilters };

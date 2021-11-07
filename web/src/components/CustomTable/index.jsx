import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import {
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { isEmpty } from 'lodash';
import { useTable, useSortBy, usePagination } from 'react-table';

import useStyles from './useStyles';

const sortIndicator = (column) =>
  column.isSortedDesc ? (
    <Icon>keyboard_arrow_down</Icon>
  ) : (
    <Icon>keyboard_arrow_up</Icon>
  );

const CustomTable = ({ columns, data, onSortChange }) => {
  const classes = useStyles();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      manualSortBy: true,
      autoResetPage: false,
      autoResetSortBy: false,
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    if (!isEmpty(sortBy)) {
      onSortChange(sortBy);
    }
  }, [sortBy, onSortChange]);

  return (
    <TableContainer>
      <Table
        className={classes.table}
        size="small"
        aria-label="Dense custom table"
        {...getTableProps}
      >
        <TableHead className={classes.tableHeader}>
          {headerGroups.map((headerGroup) => (
            <TableRow
              className={classes.tableRow}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <TableCell
                  align="center"
                  className={classes.tableHeaderCell}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  {column.isSorted ? sortIndicator(column) : ''}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow className={classes.tableRow} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const customProps = cell.column.getCellProps
                    ? cell.column.getCellProps(cell)
                    : {};
                  return (
                    <TableCell
                      align="center"
                      className={classes.tableCell}
                      {...cell.getCellProps([customProps])}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSortChange: PropTypes.func,
};

CustomTable.defaultProps = {
  onSortChange: () => {},
};

export default memo(CustomTable);

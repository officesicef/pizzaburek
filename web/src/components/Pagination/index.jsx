import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Icon, IconButton, Typography, Grid } from '@material-ui/core';

const Pagination = ({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  totalPages,
}) => (
  <Grid container>
    {totalPages > 1 && (
      <Grid
        item
        container
        xs={12}
        justifyContent="flex-end"
        alignItems="center"
      >
        <IconButton
          disabled={currentPage <= 1}
          size="small"
          onClick={handlePreviousPage}
        >
          <Icon>keyboard_arrow_left</Icon>
        </IconButton>
        <Typography variant="body2">{`page ${currentPage} of ${totalPages}`}</Typography>
        <IconButton
          disabled={currentPage === totalPages}
          size="small"
          onClick={handleNextPage}
        >
          <Icon>keyboard_arrow_right</Icon>
        </IconButton>
      </Grid>
    )}
  </Grid>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePreviousPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default memo(Pagination);

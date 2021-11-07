import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Chip } from '@material-ui/core';

import useStyles from './useStyles';

const ChipsList = ({ items, selector, onClick }) => {
  const classes = useStyles();

  return items.map((item) => (
    <Chip
      key={item.id}
      size="small"
      label={item[selector]}
      className={classes.chip}
      clickable={!!onClick}
      {...(onClick ? { onClick: () => onClick(item) } : null)}
    />
  ));
};

ChipsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
    })
  ).isRequired,
  selector: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ChipsList.defaultProps = {
  onClick: null,
};

export default memo(ChipsList);

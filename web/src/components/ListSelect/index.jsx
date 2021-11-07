import PropTypes from 'prop-types';
import React, { useCallback, memo } from 'react';
import clsx from 'clsx';
import { Divider, Grid, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const ListSelect = ({ items, onItemSelect, selectedItem, selectedItems }) => {
  const classes = useStyles();

  const isItemSelected = useCallback(
    (itemId) => selectedItems.find((item) => item.id === itemId),
    [selectedItems]
  );

  return (
    <Grid
      item
      container
      xs={12}
      className={classes.itemsContainer}
      alignContent="flex-start"
      spacing={1}
    >
      {items.map((item) => (
        <Grid
          key={item.id}
          item
          xs={6}
          className={classes.itemContainer}
          onClick={() =>
            onItemSelect({
              id: item.id,
              title: item.title,
              ...(item.icon ? { icon: item.icon } : {}),
            })
          }
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.titleContainer}
          >
            <Typography variant="body2" noWrap>
              {item.title}
            </Typography>
            {item.icon && (
              <img
                className={classes.listItemIcon}
                src={item.icon}
                alt={`${item.title} sign`}
              />
            )}
          </Grid>
          <Divider
            className={clsx(
              (selectedItem.id === item.id || isItemSelected(item.id)) &&
                classes.selected
            )}
          />
        </Grid>
      ))}
    </Grid>
  );
};

ListSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.shape({})),
};

ListSelect.defaultProps = {
  onItemSelect: () => {},
  selectedItems: [],
};

export default memo(ListSelect);

import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';

import useStyles from './useStyles';

const UserControls = ({ onAvatarClick, user }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.container}>
      <Grid item container justifyContent="center" className={classes.avatar}>
        <Avatar className={classes.userAvatar} onClick={onAvatarClick}>
          {user && 'name' in user ? user.name[0] : ''}
        </Avatar>
      </Grid>
    </Grid>
  );
};

UserControls.propTypes = {
  onAvatarClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = () => ({});

export default compose(connect(mapStateToProps), memo)(UserControls);

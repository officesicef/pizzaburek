import PropTypes from 'prop-types';
import React, { memo } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Icon,
  Typography,
} from '@material-ui/core';

import useStyles from './useStyles';

const ModalDialog = ({
  children,
  contentText,
  handleClose,
  handlePositiveButtonClick,
  negativeButtonLabel,
  open,
  positiveButtonLabel,
  title,
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="dialog">
      <DialogTitle id="dialog">
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {contentText && (
          <DialogContentText>
            <Typography variant="body2">{contentText}</Typography>
          </DialogContentText>
        )}
        {children}
      </DialogContent>
      <DialogActions>
        <Grid item xs={12} className={classes.buttonsContainer}>
          {positiveButtonLabel && (
            <Button
              variant="contained"
              startIcon={<Icon>save</Icon>}
              className={classes.positiveButton}
              onClick={handlePositiveButtonClick}
            >
              {positiveButtonLabel}
            </Button>
          )}
          {negativeButtonLabel && (
            <Button
              variant="contained"
              startIcon={<Icon>cancel</Icon>}
              className={classes.negativeButton}
              onClick={handleClose}
            >
              {negativeButtonLabel}
            </Button>
          )}
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  contentText: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  handleClose: PropTypes.func,
  handlePositiveButtonClick: PropTypes.func,
  negativeButtonLabel: PropTypes.string,
  open: PropTypes.bool,
  positiveButtonLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ModalDialog.defaultProps = {
  contentText: undefined,
  handleClose: () => {},
  handlePositiveButtonClick: () => {},
  negativeButtonLabel: '',
  open: false,
  positiveButtonLabel: '',
};

export default memo(ModalDialog);

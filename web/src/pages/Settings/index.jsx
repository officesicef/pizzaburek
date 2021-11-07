import React, { memo, useCallback, useState } from 'react';
import {
  Grid,
  Paper,
  Slider,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';

import config from 'src/config';
import { ModalDialog, Page, Title } from 'src/components';

import { ManualEntryForm } from './components';
import useStyles from './useStyles';

const Settings = () => {
  const classes = useStyles();
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const modifyIntersectionOffset = useCallback((value) => {
    config.intersectionOffset = value;
  }, []);

  return (
    <Page title="Settings">
      <Grid container>
        <Grid item xs={12}>
          <Title title="Settings" />
        </Grid>
      </Grid>
      <Paper className={classes.background}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Typography variant="h6">Intersection offset:</Typography>
          </Grid>
          <Grid item xs={2}>
            <Slider
              aria-label="IntersectionOffset"
              defaultValue={config.intersectionOffset}
              getAriaValueText={(value) => `${value}h`}
              valueLabelDisplay="auto"
              step={1}
              onChange={(e, value) => modifyIntersectionOffset(value)}
              marks={[
                {
                  value: 1,
                  label: '1h',
                },
                {
                  value: 2,
                  label: '2h',
                },
                {
                  value: 3,
                  label: '3h',
                },
                {
                  value: 4,
                  label: '1h',
                },
              ]}
              min={1}
              max={4}
            />
          </Grid>
          <Grid item xs={2} className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => setIsDialogOpened(true)}
              startIcon={<Icon className={classes.icon}>edit</Icon>}
            >
              <span className={classes.buttonsText}>Manual entry</span>
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <ModalDialog
        handleClose={() => setIsDialogOpened(false)}
        open={isDialogOpened}
        title="Manual entry"
        contentText="Enter information for a user you want to create."
      >
        <ManualEntryForm />
      </ModalDialog>
    </Page>
  );
};

Settings.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  actions: {},
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(Settings);

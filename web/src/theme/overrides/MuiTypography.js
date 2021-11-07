import { createTheme } from '@material-ui/core';

const defaultTheme = createTheme();

export default {
  h3: {
    color: '#333333',
    marginBottom: '0.5em',
  },
  h4: {
    color: '#333333',
  },
  h5: {
    color: '#333333',
    [defaultTheme.breakpoints.down('xs')]: {
      fontSize: '13px !important',
    },
  },
  h6: {
    color: '#333333',
    [defaultTheme.breakpoints.down('xs')]: {
      fontSize: '12px !important',
    },
  },
  body1: {
    [defaultTheme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  body2: {
    color: '#333333',
    fontSize: '0.755rem',
  },
};

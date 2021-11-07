import palette from '../palette';

export default {
  contained: {
    '&:hover': {
      backgroundColor: 'rgba(0, 163, 173, 0.8)',
      boxShadow: 'none',
    },
    backgroundColor: palette.primary.flat,
    color: 'white',
    textTransform: 'capitalize',
    margin: 2,
    boxShadow: 'none',
  },
  containedSizeSmall: {
    padding: '0.3em',
    fontSize: '0.9em',
    margin: 0,
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: 'rgba(51, 51, 51, 0.8)',
      boxShadow: 'none',
    },
    backgroundColor: palette.primary.dark,
    color: 'white',
    textTransform: 'capitalize',
    margin: 2,
    boxShadow: 'none',
  },
  containedSecondary: {
    '&:hover': {
      backgroundColor: 'rgba(51, 51, 51, 0.1)',
      boxShadow: 'none',
    },
    backgroundColor: 'lightgrey',
    color: palette.primary.dark,
    textTransform: 'capitalize',
    margin: 2,
    boxShadow: 'none',
  },
  textPrimary: {
    '&:hover': {
      backgroundColor: 'rgba(0, 163, 173, 0.1)',
      color: palette.primary.flat,
    },
    color: palette.primary.flat,
    textTransform: 'capitalize',
    margin: 2,
  },
  textSecondary: {
    '&:hover': {
      backgroundColor: 'rgba(51, 51, 51, 0.1)',
      color: palette.primary.dark,
    },
    color: palette.primary.dark,
    textTransform: 'capitalize',
    margin: 2,
  },
  text: {
    '&:hover': {
      backgroundColor: 'rgba(245, 72, 66, 1)',
      color: 'white',
    },
    textTransform: 'capitalize',
    margin: 2,
  },
  outlined: {
    '&:hover': {
      backgroundColor: palette.primary.flat,
      color: 'white',
      boxShadow: 'none',
    },
    background: 'none',
    border: '1px solid #00a3ad',
    color: palette.primary.flat,
    textTransform: 'capitalize',
  },
  outlinedPrimary: {
    '&:hover': {
      backgroundColor: '#808080',
      color: 'white',
      boxShadow: 'none',
    },
    background: 'none',
    border: '1px solid #808080',
    color: '#808080',
    textTransform: 'capitalize',
  },
  outlinedSizeSmall: {
    padding: '0.3em',
    fontSize: '0.9em',
    margin: 0,
  },
};

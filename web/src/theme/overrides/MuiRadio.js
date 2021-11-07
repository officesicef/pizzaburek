import palette from '../palette';

export default {
  root: {
    color: palette.primary.flat,
    '&$checked': {
      color: palette.primary.flat,
    },
  },
  colorSecondary: {
    '&$checked': {
      color: palette.primary.flat,
    },
  },
};

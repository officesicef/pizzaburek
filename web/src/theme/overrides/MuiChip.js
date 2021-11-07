import { colors } from '@material-ui/core';
import palette from '../palette';

export default {
  colorPrimary: {
    color: palette.primary.flat,
    backgroundColor: colors.grey[200],
  },
  clickableColorPrimary: {
    color: palette.primary.flat,
    backgroundColor: colors.grey[200],
    '&:hover': {
      color: palette.primary.flat,
      backgroundColor: colors.grey[200],
    },
    '&:focus': {
      color: palette.primary.flat,
      backgroundColor: colors.grey[200],
    },
  },
};

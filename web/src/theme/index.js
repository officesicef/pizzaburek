import { createTheme } from '@material-ui/core';

import palette from './palette';
import overrides from './overrides';

const baseTheme = {
  palette,
  overrides,
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
};

export const theme = createTheme(baseTheme);

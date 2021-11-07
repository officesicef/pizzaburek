import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const darkGray = '#333333';
const lightAqua = '#00f0ff';
const flatCyan = '#00a3ad';

export default {
  black,
  white,
  primary: {
    contrastText: lightAqua,
    dark: darkGray,
    main: '#18416b',
    flat: flatCyan,
    light: '#1d5892',
  },
  secondary: {
    contrastText: lightAqua,
    dark: colors.blue[900],
    main: colors.blue.A700,
    light: colors.blue.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: darkGray,
    secondary: flatCyan,
    link: lightAqua,
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    dark: darkGray,
    paper: white,
  },
  divider: colors.grey[200],
};

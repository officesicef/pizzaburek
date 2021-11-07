import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  infoCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'max-content',
  },
  paper: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
  label: {
    fontSize: 13,
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
    },
  },
}));

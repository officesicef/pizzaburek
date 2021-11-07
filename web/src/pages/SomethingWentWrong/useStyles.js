import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    color: 'white',
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
    padding: 15,
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    margin: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 35,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 25,
    },
  },
  detailsContainer: {
    marginTop: 20,
  },
  error: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
  },
  errorInfoContainer: {
    width: '70%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: 'unset',
    },
  },
  errorInfo: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
  },
}));

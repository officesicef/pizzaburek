import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formField: {
    width: 350,
    color: theme.palette.primary.flat,
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: 275,
    },
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  forgotLinks: {
    marginTop: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  loaderWrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.primary.flat,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -14,
    marginLeft: -15,
  },
  suffix: {
    position: 'absolute',
    background: 'transparent',
    top: 24,
    left: 14,
    fontSize: 16,
    [theme.breakpoints.only('md')]: {
      fontSize: 13,
      top: 18,
      left: 13,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 16,
      top: 25,
      left: 14,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 13,
      top: 19,
      left: 14,
    },
  },
  helpIcon: {
    marginLeft: 5,
    fontSize: '1.2em',
    color: 'gray',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9em',
    },
  },
}));

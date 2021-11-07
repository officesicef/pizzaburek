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
}));

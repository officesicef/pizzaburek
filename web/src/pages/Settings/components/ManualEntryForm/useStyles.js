import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  fields: {
    margin: 15,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    [theme.breakpoints.down('xs')]: {
      width: 'unset',
    },
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

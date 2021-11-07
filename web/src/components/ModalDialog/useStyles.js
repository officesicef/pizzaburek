import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  dialogContent: {
    maxWidth: 575,
    maxHeight: 575,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  positiveButton: {
    textTransform: 'uppercase',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
  negativeButton: {
    textTransform: 'uppercase',
    background: '#C0020D',
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: '#C0020D',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
}));

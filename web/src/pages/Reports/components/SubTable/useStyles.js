import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: { flex: 'auto' },
  button: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    background: '#057177',
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: '#057177',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
}));

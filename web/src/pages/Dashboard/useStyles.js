import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  closeIcon: {
    color: 'red',
  },
  reportIcon: {
    color: '#ab2727',
  },
  checkIcon: {
    color: 'green',
  },
  checkIconDisabled: {
    color: 'grey',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    background: '#057177',
    marginLeft: 'auto',
    '&:hover': {
      background: '#057177',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
  buttonsText: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  search: {
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  searchBar: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
}));

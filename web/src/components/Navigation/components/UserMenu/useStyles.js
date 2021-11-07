import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  userMenu: {
    width: 300,
    padding: theme.spacing(1),
  },
  userMenuTitle: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  header: {
    textTransform: 'uppercase',
  },
  roles: {
    color: 'black',
  },
  logoutButton: {
    '&:hover': {
      backgroundColor: 'rgba(0, 163, 173, 0.8)',
    },
    width: '100%',
    backgroundColor: '#00a3ad',
    color: 'white',
  },
}));

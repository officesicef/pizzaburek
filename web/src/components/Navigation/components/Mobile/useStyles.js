import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  navigationMenu: {
    width: 210,
    flexShrink: 0,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  drawerPaper: {
    width: 210,
    backgroundColor: theme.palette.primary.dark,
  },
  navigationMenuDrawer: {
    background: theme.palette.primary.dark,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
  },
  imageIcon: {
    height: 35,
    position: 'fixed',
    top: 10,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  environmentName: {
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
  },
  navigationGrid: {
    height: '100%',
  },
  closeMenuButton: {
    color: 'white',
    borderRadius: 0,
  },
  avatar: {
    cursor: 'pointer',
    position: 'fixed',
    top: '5',
    right: theme.spacing(2),
  },
  userAvatar: {
    [theme.breakpoints.down('xs')]: {
      width: 30,
      height: 30,
      fontSize: '1.1rem',
      border: '2px solid #4aa4ae',
    },
  },
}));

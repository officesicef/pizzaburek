import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navigationMenu: {
    width: 210,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 210,
    backgroundColor: theme.palette.primary.dark,
  },
  content: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
  },
  imageIconVertical: {
    height: 80,
    display: 'block',
    margin: '0 auto',
    marginTop: 15,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      width: 30,
      height: 30,
      fontSize: '1rem',
    },
  },
  environmentName: {
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
  },
  navigationGrid: {
    height: '100%',
  },
  qrImage: {
    cursor: 'pointer',
  },
}));

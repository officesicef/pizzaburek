import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formCard: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
    width: 400,
    color: theme.palette.primary.flat,
    [theme.breakpoints.down('xs')]: {
      width: 'unset',
      maxWidth: 'unset',
      padding: theme.spacing(1),
    },
  },
  page: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
  imageIcon: {
    height: 110,
    [theme.breakpoints.down('xs')]: {
      height: 60,
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
    },
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    color: 'grey',
    display: 'flex',
    alignItems: 'center',
    placeContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  icon: {
    fontSize: '15em',
    [theme.breakpoints.down('md')]: {
      fontSize: '9em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '6em',
    },
  },
  description: {
    [theme.breakpoints.down('md')]: {
      fontSize: 17,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
}));

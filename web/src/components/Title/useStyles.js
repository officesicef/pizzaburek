import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.9rem',
    },
  },
}));

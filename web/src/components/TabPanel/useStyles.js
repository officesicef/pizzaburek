import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: '3%',
    backgroundColor: '#f9f9f9',
    minHeight: 620,
    height: 620,
    overflow: 'auto',
    [theme.breakpoints.down('xs')]: {
      minHeight: 'unset',
      height: 'unset',
    },
  },
}));

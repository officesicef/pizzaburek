import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  slider: {
    [theme.breakpoints.down('sm')]: {
      padding: 'unset',
    },
  },
  filterLabelContainer: {
    placeSelf: 'center',
  },
  filterLabel: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      textAlign: 'center',
    },
  },
  thumbValueLabel: {
    '& > span > span > span': {
      color: 'white',
      fontSize: 8,
    },
  },
}));

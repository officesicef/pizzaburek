import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  timelineContainer: {
    position: 'absolute',
    width: '98%',
    marginTop: -95,
    cursor: 'pointer',
    outline: 'none',
    [theme.breakpoints.down('xs')]: {
      marginTop: -90,
    },
  },
  currentTime: {
    width: 10,
    border: '11px solid black',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    borderLeftColor: 'transparent',
    [theme.breakpoints.down('xs')]: {
      width: 6,
      border: '6px solid black',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'red',
      borderLeftColor: 'transparent',
    },
  },
}));

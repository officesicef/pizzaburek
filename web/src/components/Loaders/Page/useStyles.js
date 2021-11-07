import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  pageLoaderContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    placeContent: 'center',
    flexDirection: 'column',
    background: '#e9eaeb',
  },
  logo: {
    height: 150,
    width: 150,
    maxWidth: 150,
    maxHeight: 150,
    animation: '$bounce',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    [theme.breakpoints.down('md')]: {
      height: 70,
      width: 70,
      maxWidth: 70,
      maxHeight: 70,
    },
  },
  text: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  '@keyframes bounce': {
    '0%': { transform: 'scale(1,1) translateY(0)' },
    '10%': { transform: 'scale(1.1,.9) translateY(0)' },
    '30%': { transform: 'scale(.9,1.1) translateY(-60px)' },
    '50%': { transform: 'scale(1.05,.95) translateY(0)' },
    '57%': { transform: 'scale(1,1) translateY(-7px)' },
    '64%': { transform: 'scale(1,1) translateY(0)' },
    '100%': { transform: 'scale(1,1) translateY(0)' },
  },
}));

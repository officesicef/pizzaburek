import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  overlayLoaderContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    placeContent: 'center',
    flexDirection: 'column',
    background: '#e9eaeb4d',
  },
  logo: {
    height: 25,
    width: 25,
    maxWidth: 25,
    maxHeight: 25,
    animation: '$bounce',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
  '@keyframes bounce': {
    '0%': { transform: 'scale(1,1) translateY(0)' },
    '10%': { transform: 'scale(1.1,.9) translateY(0)' },
    '30%': { transform: 'scale(.9,1.1) translateY(-20px)' },
    '50%': { transform: 'scale(1.05,.95) translateY(0)' },
    '57%': { transform: 'scale(1,1) translateY(-7px)' },
    '64%': { transform: 'scale(1,1) translateY(0)' },
    '100%': { transform: 'scale(1,1) translateY(0)' },
  },
}));

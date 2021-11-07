import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  field: {
    height: '30%',
    width: '70%',
    background: 'white',
    [theme.breakpoints.only('md')]: {
      transform: 'translate(13px, 14px) scale(1)',
      fontSize: 13,
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(14px, 14px) scale(1)',
      fontSize: 12,
    },
  },
  input: {
    [theme.breakpoints.only('md')]: {
      fontSize: 13,
      padding: '11.5px 14px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
      padding: '11.5px 14px',
    },
  },
}));

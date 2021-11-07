import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
    color: theme.palette.primary.flat,
    background: 'none',
    border: '1px solid #00a3ad',

    '&:hover, &:focus': {
      backgroundColor: 'white',
    },
    '&:active': {
      backgroundColor: 'white',
    },
  },
}));

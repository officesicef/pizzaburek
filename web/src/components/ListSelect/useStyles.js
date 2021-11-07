import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  itemsContainer: {
    height: '100%',
    minHeight: 190,
    maxHeight: 190,
    overflow: 'auto',
    marginTop: theme.spacing(1),
  },
  itemContainer: {
    height: 50,
    cursor: 'pointer',
  },
  listItemIcon: {
    marginLeft: theme.spacing(2),
    fontSize: 18,
    color: '#bdbdbd',
    '&:hover': {
      color: '#00a3adcc',
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.flat,
  },
  titleContainer: {
    height: '100%',
  },
  errorBorder: {
    borderRadius: '5px',
    border: '1px solid red',
  },
}));

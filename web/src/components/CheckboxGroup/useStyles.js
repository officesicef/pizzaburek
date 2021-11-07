import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  checkboxGroupContainer: {
    flexDirection: 'unset',
    minHeight: 'fit-content',
    maxHeight: 200,
    overflowY: 'auto',
  },
  checkboxContainer: {
    minWidth: 'max-content',
    alignItems: 'center',
  },
}));

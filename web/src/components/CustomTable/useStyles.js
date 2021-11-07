import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // width: 800,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    border: '1px solid black',
  },
  pdfPage: {
    // width: 800,
    // height: 1132,
    overflow: 'hidden',
  },
  content: {
    // height: 1032,
  },
  innerContent: {
    // width: 800,
  },
  tableRow: {
    height: 35,
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  tableHeaderCell: {
    color: 'black',
    fontWeight: 'bold',
    border: '1px solid black',
    width: '25%',
  },
  tableCell: {
    width: '25%',
    border: '1px solid black',
    color: 'black',
  },
  innerTableCell: {
    borderBottom: '1px solid black',
  },
  table: {
    border: '1px solid black',
    color: 'black',
  },
  tableContainer: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
}));

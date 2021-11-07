import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  Collapse,
  TableHead,
  TableRow,
  Icon,
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import moment from 'moment';

import useStyles from './useStyles';

const SubTable = ({ row, sendInfectionReport }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          {row.interactedUsers.length > 0 && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <Icon>keyboard_arrow_up</Icon>
              ) : (
                <Icon>keyboard_arrow_down</Icon>
              )}
            </IconButton>
          )}
        </TableCell>
        <TableCell>{row.user.firstName}</TableCell>
        <TableCell>{row.user.lastName}</TableCell>
        <TableCell>{row.user.phoneNumber}</TableCell>
        <TableCell>
          {moment(row.createdAt).format('DD-MM-YYYY HH:mm')}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Box display="flex">
                <Typography
                  className={classes.title}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Users in interaction
                </Typography>
                <Button
                  className={classes.button}
                  onClick={() => sendInfectionReport(row.id)}
                >
                  Send report
                </Button>
              </Box>
              <Table size="small" aria-label="interacted-users">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Checked In</TableCell>
                    <TableCell>Checked Out</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.interactedUsers.map((history, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {history.user.firstName}
                      </TableCell>
                      <TableCell align="center">
                        {history.user.lastName}
                      </TableCell>
                      <TableCell align="center">
                        {history.user.phoneNumber}
                      </TableCell>
                      <TableCell align="center">
                        {moment(history.checkedIn).format('DD-MM-YYYY HH:mm')}
                      </TableCell>
                      <TableCell align="center">
                        {history.checkedOut
                          ? moment(history.checkedOut).format(
                              'DD-MM-YYYY HH:mm'
                            )
                          : '-'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

SubTable.propTypes = {
  sendInfectionReport: PropTypes.func.isRequired,
  row: PropTypes.shape({
    createdAt: PropTypes.string,
    id: PropTypes.number,
    user: {
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phoneNumber: PropTypes.string,
    },
    interactedUsers: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default memo(SubTable);

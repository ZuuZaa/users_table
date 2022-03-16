import React from "react";
import { useState } from 'react';
import { Table as MuiTable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper, CircularProgress, Box } from '@mui/material';
import { isEmpty } from "lodash";
import { Description } from '@mui/icons-material'


export const Table = ({ columns, rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const data = rows.data;

  console.log('data',data)

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  style={{ minWidth: column.minWidth }}
                >
                  <Typography>{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !isEmpty(data) && data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  {console.log('row',)}
                  return (
                    <TableRow hover key={row.id}>
                      {columns.map((column) => {
                        if (column.render) {
                          return (
                            <TableCell key={column.key}>
                              <Box>
                                {column.render(row)}
                              </Box>
                            </TableCell>
                          )
                        } else {
                          const value = row[column.key];
                          return (
                            <TableCell key={column.key}>
                              <Box >
                                <Typography>
                                  {value}
                                </Typography>
                              </Box>
                            </TableCell>
                          )
                        }
                      })}
                    </TableRow>
                  );
                })
            }
          </TableBody>
        </MuiTable>
      </TableContainer>
      {
        !isEmpty(data) &&
        <TablePagination
          rowsPerPageOptions={[4, 10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      }
      {
        isEmpty(data) &&
        <Box sx={{ padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
          <Description sx={{ color: '#311b92', fontSize: 80 }} />
          <Typography sx={{ color: '#311b92' }} variant="h4" >No Data</Typography>
        </Box>
      }
    </Paper>
  );
}
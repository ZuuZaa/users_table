import React from "react";
import { useState } from 'react';
import { Table as MuiTable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper, CircularProgress, Box } from '@mui/material';
import { isEmpty } from "lodash";
import { Description } from '@mui/icons-material'



export const Table = ({ columns, rows, loading }) => {
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

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Typography>{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!isEmpty(data) ? data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.key];
                      return (
                        <TableCell key={column.key} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
              :
              <Box sx={{padding:5,display:'flex', justifyContent:'center', alignItems:'center', width:'100vw'}}>
                <Description sx={{color:'#311b92', fontSize:100}}/>
                <Typography >No users were found with this name</Typography>
              </Box>
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



    </Paper>
  );
}


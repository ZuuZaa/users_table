import React from "react";
import { useState } from 'react';
import { Table as MuiTable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper, Box, Collapse } from '@mui/material';
import { isEmpty } from "lodash";
import { Description } from '@mui/icons-material'


export const Table = ({ columns, rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [collapse, setCollapse] = useState({});


  const collapseHandler = (id) => {
    setCollapse(old => ({ ...old, [id]: !old[id] }));
    console.log('collapse', collapse)
  }

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
                  return (
                    <>
                      <TableRow hover key={row.id} onClick={() => collapseHandler(row.id)}>
                        {columns.map((column) => {
                          if (column.render) {
                            return (
                              <TableCell key={`${column.key}-${row.id}`}>
                                <Box>
                                  {column.render(row)}
                                </Box>
                              </TableCell>
                            )
                          } else {
                            const value = row[column.key];
                            return (
                              <TableCell key={`${column.key}-${row.id}`}>
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
                      <Collapse in={collapse[row.id]} key={`${row.id}-collapse`}>
                        <TableRow key={`${row.id}-${row.name}-collapse`} >
                          <TableCell>
                          <Typography>Name:{row.name}</Typography>
                          </TableCell>
                        </TableRow>
                      </Collapse>

                    </>
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
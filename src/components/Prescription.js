import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Prescription = () => {

  const prescriptions = [
    { name: "Glycerin-GM (750)", days: "1 Week", frequency: "1M 0A 1N", instructions: "After Food" },
    { name: "Arthrocare Oil (SOS)", days: "1 Month", frequency: "1M 0A 1N", instructions: "For Pain" },
    { name: "Nervo (500 mg)", days: "1 Week", frequency: "1M 0A 1N", instructions: "After Food" },
    { name: "Lartin (500)", days: "1 Week", frequency: "1M 0A 1N", instructions: "After Food" },
  ];

  return (
    <Box p={3} sx={{ marginLeft: "-20px" }}> {/* Adjust the margin here */}
      <Paper elevation={3} sx={{ p: 3, width: "98%" }}>
        <h3 variant="h6" gutterBottom mt={4}>
          Prescription
        </h3>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#ddd' }}>
              <TableRow>
                <TableCell sx={{ color: 'aliceblue' }}><strong>Drug Name</strong></TableCell>
                <TableCell sx={{ color: 'aliceblue' }}><strong>Days</strong></TableCell>
                <TableCell sx={{ color: 'aliceblue' }}><strong>Frequency</strong></TableCell>
                <TableCell sx={{ color: 'aliceblue' }}><strong>Instructions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prescriptions.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.days}</TableCell>
                  <TableCell>{row.frequency}</TableCell>
                  <TableCell>{row.instructions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Prescription;

import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Box } from '@mui/material';

const BillingHistory = () => {
  const billingData = [
    {
      plan: "Pro Plan",
      amount: "$49.99",
      paymentStatus: "Paid",
      startDate: "2024-01-01",
      expireDate: "2025-01-01",
      status: "Active",
    },
    // you can add more rows here
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Paper sx={{ borderRadius: 2, overflow: "hidden", border: "1px solid #e0e0e0" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "black" }}>
              <TableCell sx={{ color: "white", fontWeight: 400 }}>Plan</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 400 }}>Amount</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 400 }}>Payment Status</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 400 }}>Start Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 400 }}>Expire Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 400 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billingData.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell>{row.plan}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.paymentStatus}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.expireDate}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default BillingHistory;

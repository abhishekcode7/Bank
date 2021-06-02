import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Dashboard.css"
// import { PieChart } from 'react-minimal-pie-chart';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(bank , cash , fund ) {
    return { bank,cash,fund };
  }
  
  const rows = [
    createData('ICICI', 159, 6),
    createData('SBI', 237, 9),
    createData('AXIS', 262, 16)
  ];

const Dashboard = () =>{
    const [startDate, setStartDate] = useState(new Date());
    const classes = useStyles();

  return (
    <div>
        <div className="date-container">
            <div>Select date to get analytics of that day :    </div>
            <DatePicker className="date-selected" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Bank</TableCell>
                    <TableCell align="right">Cash Recieved</TableCell>
                    <TableCell align="right">Fund Approved</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.bank}
                    </TableCell>
                    <TableCell align="right">{row.cash}</TableCell>
                    <TableCell align="right">{row.fund}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <div>
                {/* <PieChart
                    data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                    ]} 
                    radius="10" center={[50,14] animate=true }
                        /> */}
            </div>
        </div>
    </div> 
  );
}
export default Dashboard;
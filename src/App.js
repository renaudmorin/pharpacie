import './App.css';
import FormStep1 from './components/FormStep1';
import { useState} from "react";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function App() {
  const [formStep, setFormStep] = useState(0);
  const [data] = useState([
    {day: 1, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 2, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 3, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 4, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 5, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 6, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 7, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 8, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 9, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 10, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 11, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 12, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 13, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
    {day: 14, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null},
  ])

  function onDiastoleMatinChange(index, e) {
    data[index].diastoleMatin = parseInt(e.target.value)
  }

  function onSystoleMatinChange(index, e) {
    data[index].systoleMatin = parseInt(e.target.value)
  }

  function onBpmMatinChange(index, e) {
    data[index].bpmMatin = parseInt(e.target.value)
  }

  function onDiastoleSoirChange(index, e) {
    data[index].diastoleSoir = parseInt(e.target.value)
  }

  function onSystoleSoirChange(index, e) {
    data[index].systoleSoir = parseInt(e.target.value)
  }

  function onBpmSoirChange(index, e) {
    data[index].bpmSoir = parseInt(e.target.value)
  }

  if(formStep === 1) {
    return (
      <div className="App">
        <header className="App-header">
          <FormStep1 data={data} step={formStep}/>
          <div className="buttonGroup">
            <Button onClick={() => {
              if(formStep === 0) {
                return;
              }
              setFormStep(formStep - 1);
            }} style={{backgroundColor: "white", width: "100px", color: "black", marginRight:"50px"}}>Back</Button>
            <Button onClick={() => {
              if(formStep >= 1) {
                return;
              }
              setFormStep(formStep + 1);
            }} style={{backgroundColor: "white", width: "100px", color: "black"}}>Next</Button>
          </div>
        </header>
      </div>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div className="tableData">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">diastole matin</TableCell>
                    <TableCell align="center">systole matin</TableCell>
                    <TableCell align="center">bpm matin</TableCell>
                    <TableCell align="center">diastole soir</TableCell>
                    <TableCell align="center">systole soir</TableCell>
                    <TableCell align="center">bpm soir</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, i) => (
                    <TableRow
                      key={row.day}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" style={{width: '100px'}}>
                        Journée {row.day}
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px'}} onChange={(e) => onDiastoleMatinChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px'}} onChange={(e) => onSystoleMatinChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px'}} onChange={(e) => onBpmMatinChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px'}} onChange={(e) => onDiastoleSoirChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px'}} onChange={(e) => onSystoleSoirChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px'}} onChange={(e) => onBpmSoirChange(i, e)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        
          <FormStep1 step= { formStep }/>
          <div className="buttonGroup">
            { formStep > 0 && (
              <Button onClick={() => {
                if(formStep === 0) {
                  return;
                }
                setFormStep(formStep - 1);
              }} style={{backgroundColor: "white", width: "100px", color: "black", marginRight:"50px"}}>
                Back
              </Button>
            )}
            <Button onClick={() => {
              setFormStep(formStep + 1);
            }} style={{backgroundColor: "white", width: "100px", color: "black"}}>Next</Button>
          </div>
        </header>
      </div>
    );
  }

}

export default App;

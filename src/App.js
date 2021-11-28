import './App.css';
import FormStep1 from './components/FormStep1';
import { useState, useEffect} from "react";
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
  const [data, setData] = useState([
    {day: 1, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null}
  ]);
  const [isLoading, setIsLoading] = useState(true);

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

  function addRow() {
    let biggestIndex = 0;
    for(const row of data) {
      if(row.day > biggestIndex) {
        biggestIndex = row.day;
      }
    }
    setData([...data, {day: biggestIndex + 1, diastoleMatin: null, systoleMatin: null, bpmMatin: null, diastoleSoir: null, systoleSoir: null, bpmSoir: null} ])
  }

  function removeRow() {
    let oldArray = [...data];
    oldArray.pop();
    setData(oldArray);
  }

  useEffect(() => {
    if(formStep === 3) {
      setTimeout(function () {
          setIsLoading(false);
      }, 2000);
    }
    if(formStep !== 3) {
      setIsLoading(true);
    }
  }, [data, formStep])

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
            }} style={{backgroundColor: "white", width: "200px", color: "black", marginRight:"50px"}}>Retour</Button>
            <Button onClick={() => {
              if(formStep >= 2) {
                return;
              }
              setFormStep(formStep + 1);
            }} style={{backgroundColor: "white", width: "200px", color: "black"}}>Voir mes recommandation</Button>
          </div>
        </header>
      </div>
    )
  } 
  if(formStep === 2) {
    return (
      <div className="App">
        <header className="App-header">
          <FormStep1 data={data} step={formStep}/>
          <div className="buttonGroup">
            <Button onClick={() => {
              setFormStep(formStep - 1);
            }} style={{backgroundColor: "white", width: "200px", color: "black", marginRight: "50px", marginTop:"15px"}}>
              Retour
            </Button>
            <Button onClick={() => {
              setFormStep(formStep + 1)
            }} style={{backgroundColor: "white", width: "200px", color: "black", marginTop:"15px"}}>
             Je comprends   
            </Button>
          </div>
        </header>
      </div>
    )
  }
  if(formStep === 3) {
    return (
      <div className="App">
        <header className="App-header">
          <FormStep1 data={data} step={formStep} isLoading={isLoading}/>
          <div className="buttonGroup">
            <Button onClick={() => {
              if(formStep === 0) {
                return;
              }
              setFormStep(formStep - 1);
            }} style={{backgroundColor: "white", width: "200px", color: "black"}}>Retour</Button>
          </div>
        </header>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <div className="tableData">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">Systole matin</TableCell>
                    <TableCell align="center">Diastole matin</TableCell>
                    <TableCell align="center">Bpm matin</TableCell>
                    <TableCell align="center">Systole soir</TableCell>
                    <TableCell align="center">Diastole soir</TableCell>
                    <TableCell align="center">Bpm soir</TableCell>
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
                        <TextField style={{width: '100px', height: '100px', marginTop: '50%'}} defaultValue={row.systoleMatin} onChange={(e) => onSystoleMatinChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px', marginTop: '50px'}} defaultValue={row.diastoleMatin} onChange={(e) => onDiastoleMatinChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px', marginTop: '50px'}} defaultValue={row.bpmMatin} onChange={(e) => onBpmMatinChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px', marginTop: '50px'}} defaultValue={row.systoleSoir} onChange={(e) => onSystoleSoirChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px', marginTop: '50px'}} defaultValue={row.diastoleSoir} onChange={(e) => onDiastoleSoirChange(i, e)} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField style={{width: '100px', height: '100px', marginTop: '50px'}} defaultValue={row.bpmSoir} onChange={(e) => onBpmSoirChange(i, e)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
              <Button onClick={() => {
                addRow();
              }} style={{backgroundColor: "white", width: "200px", color: "black", marginRight: "50px", marginTop:"15px"}}>
                Ajouter une journée 
              </Button>
              <Button onClick={() => {
                removeRow();
              }} style={{backgroundColor: "white", width: "200px", color: "black", marginTop:"15px"}}>
                 Retirer une journée 
              </Button>
          </div>
        
          <FormStep1 step= { formStep }/>
          <div className="buttonGroup">
            { formStep > 0 && (
              <Button onClick={() => {
                if(formStep === 0) {
                  return;
                }
                setFormStep(formStep - 1);
              }} style={{backgroundColor: "white", width: "200px", color: "black", marginRight:"50px"}}>
                Retour
              </Button>
            )}
            <Button onClick={() => {
              setFormStep(formStep + 1);
            }} style={{backgroundColor: "white", width: "200px", color: "black"}}>Voir ma moyenne</Button>
          </div>
        </header>
      </div>
    );
  }

}

export default App;

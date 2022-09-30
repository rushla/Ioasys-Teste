import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLogin from './Input';

function App() {
  return (
    <Box className="App">
      <header className="App-header">
       <Grid className='tittleBox' container spacing={2} direction="row">
          <Grid item >
          <h1 className='tittle'>ioasys <a className='tittle2'>Books</a></h1>
          </Grid> 
       </Grid>
       <Grid className='tittleBox' container spacing={2} direction="row">
          <Grid item xs={6}>
            <InputLogin/>
          </Grid> 
       </Grid>
      </header>
    </Box>
  );
}

export default App;

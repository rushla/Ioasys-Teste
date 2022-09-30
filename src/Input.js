import './App.css';
import Grid from '@mui/material/Grid';
import { TextField, Button, Paper, InputBase, Alert } from '@mui/material';

import './index.css';


function InputLogin(props) {
    
    return (
        <div>
            <Grid container>
                <Grid item spacing={2}>
                <Paper style={{backgroundColor: "rgba(0, 0, 0, 0.32)", display: "flex"}} className='inputText'>
                        <InputBase style={{color:"white", }} sx={{ ml:1, flex:1 }} placeholder="Nome" 
                        inputProps={{ 'aria-label': 'Nome'}}/>
                    </Paper>
                    <Paper  style={{backgroundColor: "rgba(0, 0, 0, 0.32)",
                                display: "flex", }} className='inputText'>
                        <InputBase style={{color:"white"}} sx={{ ml:1, flex:1 }} type="password" placeholder="Senha"
                        inputProps={{ 'aria-label': 'Senha'}}/>
                        <Button style={{color: "#B22E6F",fontWeight:"bold",margin:"10px", borderRadius: "44px", backgroundColor:"#fff", borderColor:"#fff"}} variant="outlined">Entrar</Button>
                    </Paper>
                </Grid>
            </Grid>
        
        </div>
  );
}

export default InputLogin;
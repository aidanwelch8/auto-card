import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Typography, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import './auth.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const paperStyle = {padding: '20px', height: '60vh', width: '450px', margin: '40px auto'};
    const navigate = useNavigate();
    const elementStyle = { height: '80px'}
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleCheck = () => {
        setShowPassword(!showPassword);
    };

    const login = async () => {
        try {
            // eslint-disable-next-line
            const user = await signInWithEmailAndPassword(auth, email, password);
            navigate('/')
            props.onLogIn();

        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center" margin="20px">
                    <Avatar style={{backgroundColor: '#3993dd'}}><LockOutlined /></Avatar>
                    <h2 style={{margin: '20px'}}>Sign In</h2>
                </Grid>
                <TextField value={email} onChange={handleEmailChange} label="Email" placeholder="user@example.com" variant="standard" fullWidth required style={elementStyle}/>
                <TextField value={password} onChange={handlePasswordChange} label="Password" placeholder="Enter password" variant="standard" type={showPassword ? "text" : "password"} fullWidth required style={elementStyle}/>
                <FormControlLabel 
                    control={
                        <Checkbox
                            name="checkBox"
                            onChange={handleCheck}
                        />
                    }
                    label="Show Password"
                    style={elementStyle}
                />
                <Button type="submit" fullWidth variant="contained" onClick={login} style={{ height: '50px', marginBottom: '20px' }}>Sign In</Button>
                <Typography sx={{ marginBottom: '16px' }}> Do you have an account?
                    <Link href="/signup" style={{marginLeft: '16px'}}>
                        Sign Up
                    </Link>
                </Typography>
                { errorMessage !== "" ?
                    <Typography sx={{ padding: '20px', backgroundColor: 'rgba(255,0,0,0.2)', borderRadius: '5px' }}>
                        {errorMessage}
                    </Typography>
                    : <></>
                }
            </Paper>
        </Grid>
    );
};

export default Login;

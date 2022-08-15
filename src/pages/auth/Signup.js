import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import './auth.css';

function Signup(props) {
    const paperStyle = {padding: '20px', height: '60vh', width: '450px', margin: '40px auto'};
    const elementStyle = { height: '80px'}
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCheck = () => {
        setShowPassword(!showPassword);
    };

    const signup = async () => {
        try {
            // eslint-disable-next-line
            const user = await createUserWithEmailAndPassword(auth, email, password);
            navigate('/')
            props.onLogIn();

        } catch (error) {
            console.log(error.message);
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
                    <h2 style={{margin: '20px'}}>Sign Up</h2>
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
                <Button type="submit" fullWidth variant="contained" onClick={signup} style={{height: '50px', marginBottom: '20px'}}>Create Account</Button>
            </Paper>
        </Grid>
    );
};

export default Signup;

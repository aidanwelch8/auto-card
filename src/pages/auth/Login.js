import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Typography, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import './auth.css';

function Login() {
    const paperStyle = {padding: '20px', height: '60vh', width: '450px', margin: '40px auto'};
    const elementStyle = { height: '80px'}
    const [showPassword, setShowPassword] = useState(false);

    const handleCheck = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center" margin="20px">
                    <Avatar style={{backgroundColor: '#3993dd'}}><LockOutlined /></Avatar>
                    <h2 style={{margin: '20px'}}>Sign In</h2>
                </Grid>
                <TextField label="Email" placeholder="Enter email" variant="standard" fullWidth required style={elementStyle}/>
                <TextField label="Password" placeholder="Enter password" variant="standard" type={showPassword ? "text" : "password"} fullWidth required style={elementStyle}/>
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
                <Button type="submit" fullWidth variant="contained" style={{height: '50px', marginBottom: '20px'}}>Sign In</Button>
                <Typography> Do you have an account?
                    <Link href="/signup" style={{marginLeft: '16px'}}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;

import React, { useState } from 'react';
import './auth.css';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

function Signup() {
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
                    <h2 style={{margin: '20px'}}>Sign Up</h2>
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
                <Button type="submit" fullWidth variant="contained" style={{height: '50px', marginBottom: '20px'}}>Create Account</Button>
            </Paper>
        </Grid>
    );
};

export default Signup;

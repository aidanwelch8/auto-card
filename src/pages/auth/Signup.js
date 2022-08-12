import React from 'react';
import './auth.css';

function Signup(props) {
    return (
        <div className="signup">
            <label for="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <button type="submit">Login</button>
        </div>
    );

};

export default Signup;
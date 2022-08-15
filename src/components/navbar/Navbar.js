import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { MailOutline, Menu, Close } from '@mui/icons-material';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import './navbar.css';

function Navbar(props) {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = props.isLoggedIn;

    const handleClick = () => {
        setActive(!active);
    };

    const handleLogout = async () => {
        props.onLogOut();
        await signOut(auth);
        navigate('/');
    };

    return(
        <nav className="navbarItems">
            <h1 className="navbarLogo" onClick={() => navigate('/')}>
                Auto<div className="navbarName2">Card</div>
                <div className="icon"><MailOutline sx={{ fontSize: "32px" }}/></div>
            </h1>
            <div className="menuIcon" onClick={handleClick}>
                {active ? <Close sx={{ fontSize: "32px" }}/> : <Menu sx={{ fontSize: "32px" }}/>}
            </div>
            <ul className={active ? "navMenu active" : "navMenu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.link}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {isLoggedIn ? (
                <Button onClick={handleLogout}>Logout</Button>
            ) : (
                <Button onClick={() => navigate('/login')}>Sign In</Button>
            )}
        </nav>
    );
}

export default Navbar;
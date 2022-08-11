import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { MailOutline, Menu, Close } from '@mui/icons-material';
import { Button } from '../button/Button';
import './navbar.css';

function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return(
        <nav className="navbarItems">
            <h1 className="navbarLogo">
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
            <Button>Sign Up</Button>
        </nav>
    );
}

export default Navbar;
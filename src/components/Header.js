import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Header = () => {

    return (
        <div className="header-div">
            <div className="head-logo">
                <h2>JCH</h2>
            </div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                </ul>
        </div>
    );
};

export default Header;
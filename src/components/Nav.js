import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/experience">Experience</Link></li>
        </ul>
    );
};

export default Nav;
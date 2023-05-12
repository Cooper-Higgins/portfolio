import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav'
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import ErrorPage from '../components/ErrorPage';

const Container = () => {
    return (
        <Router>
            <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
        </Router>
    );
};

export default Container;


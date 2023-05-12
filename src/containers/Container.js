import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import ErrorPage from '../components/ErrorPage';
import '../App.css';

const Container = () => {
    return (
        <Router>
            <Header/>
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


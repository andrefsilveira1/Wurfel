import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import Logo from '../Components/Templates/Logo'
import Nav from '../Components/Templates/Nav'
import Footer from '../Components/Templates/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </HashRouter>
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';   
import { BrowserRouter  } from "react-router-dom";
import { Routes, Route } from "react-router-dom"  
import {About, Contact, Services } from "./pages/About/Allpages"   

//we are rendering The App.js file on index.js and linking what the App renders on index.html page using the html id called Root 
// this is saying the App is going to be rendered inside the div element in index.html with An id of root 
ReactDOM.render(
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<App />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />    
       </Routes>  
    </BrowserRouter>, 
    document.getElementById('root'));      

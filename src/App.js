import React from 'react';

import { Footer, Possibility, WhatGPT3, Header } from './containers';
import { CTA } from './components';
import { Navbar } from './components';  

import './App.css';
import ReactYouTubeExample from './MctinaYoutube';
import ReactAboutExample from './AboutmeYoutube'; 
import SocialFollow from './SocialFollow'; 


const App = () => (
  
  <div className="App">
    <div className="gradient__bg">   
 
      <Navbar />
       
      <Header />

    
    </div>
    <ReactYouTubeExample />  

    {/* <Brand />  */} 
    <WhatGPT3 /> 
    {/* <Features /> */} 
    <Possibility />
    <ReactAboutExample /> 
    <CTA />
    {/* <Blog /> */}  
    <SocialFollow /> 
    <Footer />


     
    
  </div> 


);

export default App;

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { CTA, Navbar } from '../../components';
import { Footer, Header, WhatGPT3 } from '../../containers';  
import ReactYouTubeExample from '../../MctinaYoutube';
import ReactAboutExample from '../../AboutmeYoutube';
import SocialFollow from '../../SocialFollow';   

import "./Allpages.css" 

export function About() {
    return (
        <div>
            <Navbar/>
            <Header /> 
            <ReactYouTubeExample /> 
            <SocialFollow />
            <Footer /> 
        
        </div>  
    );
}

export function Services() {   
    return (
        <div>
      <Navbar/>
      <WhatGPT3 /> 
            <ReactAboutExample />           
            <SocialFollow /> 
       <Footer />  

        </div>
    );
} 
export function Contact() { 


      const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // 'service_4fhtfel', 'template_8w1paiq', form.current, 'Nc2HLEb29oTkl75Tx' 

        emailjs.sendForm('service_chl3udf', 'template_pmm4gjp', form.current, 'yz3CWZ462RobhmWYV')     
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);  
            });
        
        alert("Email Sent");  
        
        
    }; 


    return (
        <div>
            <Navbar />  
             <CTA />   
               <div className='contact'>
            <div className='container'>
                <div className='form-container'>
                    <form ref={form} onSubmit={sendEmail}>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" name='user_name' placeholder='Enter your name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name='user_email' placeholder='Enter your Email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' name='user_message' placeholder='Enter your Message' />
                        </div>
                        <input type="submit" name='submit'></input>
                    </form>
 
                </div>

            </div>
         
          
        </div> 

    <SocialFollow />
      <Footer /> 
        </div>
    ); 
}
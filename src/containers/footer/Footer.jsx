import React, { useEffect } from 'react' 
import './footer.css'; 
import gpt3Logo from '../../assets/mc.jpeg';      
import { Link } from 'react-router-dom';
import  Aos  from 'aos'; 
import "aos/dist/aos.css"; 

const Footer = () => { 

  useEffect(() => {
    Aos.init({ duration: 2000,  once: false}  );    
    }, []);  
  
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 data-aos="fade-left" className='gradient__text'>Sitemap</h1>  
      </div>
      <div className='gpt3__footer-btn'> 
          <p data-aos="fade-right"><Link className='changelinkcolor' to="/services">More Info</Link> </p>  
      </div>

      <div className='gpt3__footer-links'> 
        <div className='gpt3__footer-links_logo'>
          <img data-aos="fade-up" src={gpt3Logo} alt="logo" /> 
          <p data-aos="fade-up">Ekpome Edo State,  All Rights Reserved.</p> 
        </div>
        <div className='gpt3__footer-links_div'>  
          <h4 data-aos="fade-up">Links</h4> 
           <p data-aos="fade-up"><Link className='changelinkcolor' to="/">Home</Link> </p> 
          <p data-aos="fade-up"><Link className='changelinkcolor' to="/about">About</Link> </p>
          <p data-aos="fade-up"> <Link className='changelinkcolor' to="/services">Services</Link></p>
          <p data-aos="fade-up"> <Link className='changelinkcolor' to="/contact">Contact</Link></p>


          {/* <p>Home</p>
          <p>About</p>
          <p> Services</p> */}

        </div>
         <div className='gpt3__footer-links_div'>  
          <h4 data-aos="fade-up">MC TINA</h4>
          <p data-aos="fade-up"><Link className='changelinkcolor' to="/about">About</Link> </p>
          <p data-aos="fade-up"> <Link className='changelinkcolor' to="/services">Services</Link></p>
          <p data-aos="fade-up"> <Link className='changelinkcolor' to="/contact">Contact</Link></p>  

        </div>
         <div className='gpt3__footer-links_div'>  
          <h4 data-aos="fade-up">Get In Touch</h4>
          <p data-aos="fade-up">Ekpoma Edo State, All Rights Reserved.</p>
          <p data-aos="fade-up">+234(0) 8024102331</p>
          <p data-aos="fade-up">izoena2017@gmail.com</p> 
        </div>
     </div>
      <div className='gpt3__footer-copyright'> 
        <p data-aos="fade-up"> © Copyright 2022 Meet MC TINA. All rights reserved. </p>    
      </div>
      
    </div>
  )
}

export default Footer  

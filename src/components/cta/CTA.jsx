import React,{useEffect} from 'react'
import './cta.css';
import { Link } from 'react-router-dom';
 import  Aos  from 'aos'; 
import "aos/dist/aos.css";  

const CTA = () => {
     useEffect(() => { 
    Aos.init({ duration: 2000, once: false });      
     }, []); 
  
  return ( 
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p  data-aos="fade-right" style={{ fontSize:"20px"}} >Call or DM us at +234(0) 8024102331</p>    
       <h3 data-aos="fade-right">email us at: izoena2017@gmail.com</h3>   
      </div>
      <div data-aos="fade-left" className='gpt3__cta-btn'>  
            <button type="button"><Link className='changelinkcolor' to="/contact">Get In Touch</Link></button>            
      </div>
        
    </div> 
  )
}

export default CTA

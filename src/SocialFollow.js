import React, { useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
  faFacebook, 
  faWhatsapp,

} from "@fortawesome/free-brands-svg-icons";   
import "./Socialmedia.css" 
import  Aos  from 'aos'; 
import "aos/dist/aos.css";   

export default function SocialFollow() { 
 
       useEffect(() => { 
    Aos.init({ duration: 2000, once: false});     
     }, []);  

  return (
      <div   className="social-container" > 
      <h3 data-aos="fade-left"> Reach Us on Social Media </h3> 
      <a data-aos="fade-left"
        href="https://api.whatsapp.com/send?phone=2348024102331&text=Hi%2C%20This%20is%20MC%20TINA%27s%20please%20how%20can%20we%20be%20of%20service%20to%20you." 
        className="youtube social" 
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />  
      </a>
      <a data-aos="fade-left"
        href="https://m.facebook.com/permalink.php?id=624502868373189&story_fbid=624526531704156" 
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      {/* <a href="https://www.twitter.com/jamesqquick" className="twitter social"> 
        <FontAwesomeIcon icon={fa} size="2x" /> 
      </a> */} 
      {/* <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social" 
      >
       <FontAwesomeIcon icon={faInstagram} size="2x" /> *
      </a> */} 
    </div>
  );
}


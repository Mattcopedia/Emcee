import React, {useEffect} from 'react'; 
import './possibility.css'; 
import possibilityImage from '../../assets/mc tina.png';    

import  Aos  from 'aos'; 
import "aos/dist/aos.css";  

const Blog = () => {

    useEffect(() => { 
    Aos.init({ duration: 2000, once: false });     
  }, []);       

  return (
    <div className='gpt3__possibility section_padding' id='possibility'>
      <div    className='gpt3__possibility-image'>
        <img data-aos="fade-left" src={possibilityImage} alt="possibility"  />     
         
      </div>
      <div    className='gpt3__possibility-content'>
        <h4 data-aos="fade-right">What You Should Know</h4> 
        <h1 data-aos="fade-right" className='gradient__text'>About Me</h1>   
        <p data-aos="fade-right" >MC Tina is known on stage as Orese Shan. She is a professional master of ceremonies. For over a decade she has been a good speaker at different women, youths and teens programmes. Her natural gift and flare for talking makes her stage lively from starting to finish.</p>
        {/* <h4>Request Early Access to get Started</h4>   */} 
      </div>   
    </div>
  )
}

export default Blog  

import React,{ useEffect } from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import  Aos  from 'aos'; 
import "aos/dist/aos.css";   

const WhatGPT3 = () => {

     useEffect(() => { 
    Aos.init({ duration: 2000, once: false  });      
     }, [  ]);      
  
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div  data-aos="fade-left"  data-aos-once="false" className="gpt3__whatgpt3-feature">
        <Feature title="Master of Ceremonies & Entertainer" text="I have been called to speak and I will speak even as Michelangelo painted, or Beethoven composed music, or Shakespeare wrote poetry. I will speak so well that all the hosts of heaven and earth will pause to say, here lived a great speaker who did her job well. Martin Luther King Jr" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 data-aos="fade-right"  data-aos-once="false" className="gradient__text">What I Do</h1>
        <p data-aos="fade-left"  data-aos-once="false">We Would Love to Hear From You</p> 
      </div>
      <div data-aos="fade-left"  data-aos-once="false"  className="gpt3__whatgpt3-container">    
        <Feature   title="Moderator" text="MC Tina is that confident, diplomatic but sure-footed lead discussant who organizers want on their panels, to ensure audiences get the most value out of sessions" />
        <Feature  title="Keynote Speaker" text="An unending retinue of conferences & conventions, seminars, retreats have benefitted from MC Tinas’ cutting-edge knowledge and wealth of experience in Public Speaking" />
        <Feature   title="Event Host Mc" text="With her many years experience in the business, MC Tina is sure to keep audiences super engaged, achieve event objectives, and ensure clients satisfaction." />
      </div>
    </div>
  )
}; 

export default WhatGPT3;  



// import React from 'react'
// import './whatGPT3.css'; 


// import Feature from '../../components/feature/Feature'; 

// const WhatGPT3 = () => { 
//   return (
//     <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
//       <div className='gpt3__whatgpt3-feature'>
//        <Feature />
//       </div> 
//       <div className='gpt3__whatgpt3-heading'>
//         <h1 className='gradient__text'> </h1> 
//         <p>Explore the Library</p> 
//       </div>  
//       <div className='gpt3__whatgpt3-container '> 
//         <Feature /> 
//         <Feature /> 
//         <Feature />    
//       </div>
      
//     </div>
//   )
// }

// export default WhatGPT3;     

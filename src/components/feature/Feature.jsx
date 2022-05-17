import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature; 



// import React from 'react'
// import './feature.css'; 

// // we define here in the arguments that our featured component accepts title and text as props
// const Feature = ({ title, text}) => { 
//   return (
//     <div className='gpt3__features-container__feature'>
//       <div className='gpt3__features-container__feature-title '> 
//         <div />
//         <h1>{title}</h1>
//         <div className='gpt3__features-container_feature-text'> 
//            <p> {text} </p> 
//         </div> 
 
//       </div>
//     </div>
//   )
// }

// export default Feature;  


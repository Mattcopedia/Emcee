import React, {useEffect} from 'react'; 
import ai from '../../assets/mc tina1.png'; 
import './header.css';
import { Link } from 'react-router-dom'; 
import  Aos  from 'aos'; 
import "aos/dist/aos.css";   

const Header = () => {  
  // note useEffect doesnt use the = sign and all react Hooks dont use the = sign except when assigned to a const variable  

  useEffect(() => { 
    Aos.init({ duration: 2000, once: false, });       
  }, []);      

  return ( 
    
  <div   className="gpt3__header section__padding" id="home"> 
    <div data-aos="fade-right" className="gpt3__header-content"> 
      <h1 className="gradient__text">Meet MC Tina</h1>  
      <p>“I have been called to speak and I will speak even as Michelangelo painted, or Beethoven composed music, or Shakespeare wrote poetry. I will speak so well that all the hosts of heaven and earth will pause to say, here lived a great speaker who did her job well.” Martin Luther King Jr. (Paraphrased).​</p>

      <div  data-aos="fade-right"   className="gpt3__header-content__input">     
        {/* <input type="email" placeholder="Your Email Address" /> */} 
            <button type="button"><Link className='changelinkcolor' to="/contact">Get In Touch</Link></button>            
      </div> 

      <div className="gpt3__header-content__people">
        {/* <img src={people} alt="ai" />
        <p>1,600 people requested access a visit in last 24 hours</p> */}
      </div>
    </div>

    <div data-aos="fade-left" className="gpt3__header-image">  
      <img src={ai} alt="ai" /> 
    </div>
  </div> 
)
      };

export default Header; 



import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import navbarlogo from '../../logo.svg';        
import './navbar.css';
import { Link } from 'react-router-dom';
 
const Navbar = () => { 
  const [toggleMenu, setToggleMenu] = useState(false);        

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <p className='logoheader'>Meet MC TINA</p>  
          {/* <img src={navbarlogo} alt="logo" />   */}
        </div> 

        <div className="gpt3__navbar-links_container">
           {/* <Link to="/">Home</Link> 
           <Link to="/about">About</Link> 
           <Link to="/services">Services</Link>
           <Link to="/contact">Contact</Link>   */} 

          <p><Link className='changelinkcolor' to="/">Home</Link> </p>
          <p><Link className='changelinkcolor' to="/about">About</Link> </p>
          <p> <Link className='changelinkcolor' to="/services">Services</Link></p>
          {/* <p> <Link className='changelinkcolor' to="/contact">Contact</Link> </p>    */} 
          
        </div> 


      </div>
      <div className="gpt3__navbar-sign">
        <p></p>
            <button type="button"><Link className='changelinkcolor' to="/contact">Contact</Link></button>    
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">

           <p><Link className='changelinkcolor' to="/">Home</Link> </p>
          <p><Link className='changelinkcolor' to="/about">About</Link> </p>
          <p> <Link className='changelinkcolor' to="/services">Services</Link></p>
          {/* <p> <Link className='changelinkcolor' to="/contact">Contact</Link> </p>    */}
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p></p>
            <button type="button"><Link className='changelinkcolor' to="/contact">Contact</Link></button>      
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar; 







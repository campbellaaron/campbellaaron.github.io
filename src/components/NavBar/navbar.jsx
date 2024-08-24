import React, { useState } from "react";
import {Link} from 'react-scroll';
import IMAGES from '../../assets/img';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={IMAGES.logoAWC} alt="futuristic logo of the initials AWC" className="logo" />
            <div className="menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-200} duration={400} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={400} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-160} duration={400} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="contactBtn" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
                <img src={IMAGES.iconChat} alt="" className="btn-icon" /> Contact Me
            </button>

           <img src={IMAGES.iconMenu} alt="Open Menu" className="menuIcon" onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-200} duration={400} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={400} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-160} duration={400} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-168} duration={400} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div> 
        </nav>
    )
}

export default Navbar
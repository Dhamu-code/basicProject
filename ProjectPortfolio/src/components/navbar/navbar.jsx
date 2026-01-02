import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        
        {/* Desktop Menu - Only visible on larger screens */}
        <div className='desktopMenu'>
            <Link to='Intro'smooth={true} className='desktopMenuListItem'>HOME</Link>
            <Link  to='service'smooth={true} className='desktopMenuListItem'>DOMAIN</Link>
            <Link to='skillGrid' smooth={true} className='desktopMenuListItem'>SKILLS</Link>
            <Link to='projects' smooth={true} className='desktopMenuListItem'>PROJECTS</Link>
            <Link to='contact' smooth={true} className='desktopMenuListItem'>CONTACT</Link>
        </div>
        
        <button className='desktopMenuBtn'><Link to='contact' smooth={true} className='desktopMenuListItem'>Contact Me</Link></button>
        
        {/* Mobile Hamburger Menu - Only visible on small screens */}
        <div className='mobileMenu' onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Separate from main nav */}
      <div className={`mobileMenuOverlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className='closeMenu' onClick={closeMobileMenu}>×</button>
        <Link to='Intro' className='desktopMenuListItem' onClick={closeMobileMenu}>HOME</Link>
        <Link to='service' className='desktopMenuListItem' onClick={closeMobileMenu}>DOMAIN</Link>
        <Link to='skillGrid' className='desktopMenuListItem' onClick={closeMobileMenu}>SKILLS</Link>
        <Link to='projects' className='desktopMenuListItem' onClick={closeMobileMenu}>PROJECTS</Link>
        <Link to='contact'  className='desktopMenuListItem' onClick={closeMobileMenu}>CONTACT</Link>
        <button className='mobileMenuBtn' onClick={closeMobileMenu}>Contact Me</button>
      </div>
    </>
  )
}

export default Navbar
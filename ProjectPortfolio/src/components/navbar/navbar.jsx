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
            <Link className='desktopMenuListItem'>HOME</Link>
            <Link className='desktopMenuListItem'>SERVICES</Link>
            <Link className='desktopMenuListItem'>SKILLS</Link>
            <Link className='desktopMenuListItem'>PORTFOLIO</Link>
            <Link className='desktopMenuListItem'>CONTACT</Link>
        </div>
        
        <button className='desktopMenuBtn'>Contact Me</button>
        
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
        <Link className='desktopMenuListItem' onClick={closeMobileMenu}>HOME</Link>
        <Link className='desktopMenuListItem' onClick={closeMobileMenu}>SERVICES</Link>
        <Link className='desktopMenuListItem' onClick={closeMobileMenu}>SKILLS</Link>
        <Link className='desktopMenuListItem' onClick={closeMobileMenu}>PORTFOLIO</Link>
        <Link className='desktopMenuListItem' onClick={closeMobileMenu}>CONTACT</Link>
        <button className='mobileMenuBtn' onClick={closeMobileMenu}>Contact Me</button>
      </div>
    </>
  )
}

export default Navbar
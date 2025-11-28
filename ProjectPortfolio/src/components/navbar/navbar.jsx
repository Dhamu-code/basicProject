import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>HOME</Link>
            <Link className='desktopMenuListItem'>SERVICES</Link>
            <Link className='desktopMenuListItem'>SKILLS</Link>
            <Link className='desktopMenuListItem'>PORTFOLIO</Link>
            <Link className='desktopMenuListItem'>CONTACT</Link>
        </div>
        <button className='desktopMenuBtn'>Contact Me</button>
    </nav>
  )
}

export default Navbar
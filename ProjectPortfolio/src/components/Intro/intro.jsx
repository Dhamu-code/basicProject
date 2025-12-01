import React from 'react';
import './intro.css';
import bg from '../../assets/home-banner.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <button className="hello">Hello.</button>
            <span className='introText'>We Have <br/>Design Experience</span>
            <p className='introPara'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
            <Link><button className="btn">Let's Talk</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro
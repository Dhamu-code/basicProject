import React from 'react';
import './intro.css';
import bg from '../../assets/home-banner.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent" id='Intro'>
            <button className="hello">Hello.</button>
            <span className='introText'>I'm Dhamodharan <br/>Full Stack Developer</span>
            <p className='introPara'>Highly motivated MERN Stack Developer passionate about solving real-world challenges with clean, efficient code and modern JavaScript frameworks.</p>
            <Link to='Contact' smooth={true}><button className="btn" >Let's Talk</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro
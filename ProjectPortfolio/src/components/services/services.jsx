import React from 'react'
import './services.css'

const Services = () => {
  return (
    <>
   <div id="service">
     <div className="services">
        <button className="servicebtn">Services</button>
        <h1 className="service">Services I Offer</h1>
    </div>
    <section className="sectionsGrid">
        <div className="webDesign">
          <h1>01</h1><br/>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="development">
           <h1>02</h1><br/>
          <h3>Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="seoMarketing">
           <h1>03</h1><br/>
          <h3>SEO Marketing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="webDesign1">
           <h1>04</h1><br/>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="development1">
           <h1>05</h1><br/>
          <h3>Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="seoMarketing1">
           <h1>06</h1><br/>
          <h3>SEO Marketing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </section>
   </div>
    </>
  )
}

export default Services
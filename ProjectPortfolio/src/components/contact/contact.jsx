import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import pic from "../../assets/pic.svg"

const Contact = () => {
  return (
    <>
    <div className='dis'>
        <div className="discuss">
            <button className="contBtn">Contact</button>
            <h1>Let's Discuss Project</h1>
        </div>
        <div className="contGrid">
            <div className="getDiv">
                <h1>Get in touch</h1>
                <p>Our friendly team would love to hear from you.</p>
                <div className="nameEmail">
                   <div className="1">
                     <p>First name</p>
                    <input type="text" placeholder='Name*' id='name1'/>
                   </div>
                    <div className="2">
                        <p>Your Email</p>
                    <input type="email" placeholder='Email*' id='email'/>
                    </div>
                </div>
                <p>Subject</p>
                <input type="text" placeholder='Subject*'id='sub'/>
                <p>Your message</p>
                <input type="text" placeholder='Your message*'id='message'/>
                <button className="send">Send Message</button>
            </div>
            <div className="details">
                <div className="detailFlex">
                    <div className="phoneIcon">
                        <FaPhoneAlt />
                    </div>
                    <div className="phone">
                        <p>Phone</p>
                        <h2>+01 123 654 8096</h2>
                    </div>
                    <div className="emailIcon">
                        <MdEmail />
                    </div>
                    <div className="email">
                        <p>Mail</p>
                        <h2>info@domainname.com</h2>
                    </div>
                    <div className="locIcon">
                        <MdLocationPin />
                    </div>
                    <div className="location">
                        <p>Visit My Studio</p>
                        <h2>Warnwe Park Streetperrine,<br/>FL 33157 New York City</h2>
                    </div>
                </div>
                <div className="svgDiv">
                    <img src={pic} alt="pic-svg" />

                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
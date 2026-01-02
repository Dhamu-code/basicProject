import React from 'react'
import './contact.css'
// import email from "../../assets/email.jpg"
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import pic from "../../assets/pic.svg"

const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className="discuss">
            <button className="contBtn">Contact</button>
            <h1>Let's Discuss Project</h1>
        </div>
        <div className="contGrid" id='Contact'>
            <div className="getDiv">
                <h1>Get in touch</h1>
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
                        <FaPhoneAlt id='phone'/>
                    </div>
                    <div className="phone">
                        <p>Phone</p>
                        <h2>+91 8189820917</h2>
                    </div>
                    <div className="emailIcon">
                        {/* <img src={email} alt="email" id='email' /> */}
                        <HiOutlineMail id='email1'/>
                    </div>
                    <div className="email">
                        <p>Mail</p>
                        <h2>dhamodharan130602@gmail.com</h2>
                    </div>
                    <div className="locIcon">
                        <MdLocationPin id='loc'/>
                    </div>
                    <div className="location">
                        <p>Visit Me At</p>
                        <h2>Nallavadu,<br/>Pondicherry</h2>
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
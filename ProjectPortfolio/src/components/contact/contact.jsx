import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
import pic from "../../assets/pic.svg"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="discuss">
        <button className="contBtn">Contact</button>
        <h1>Let's Discuss Project</h1>
      </div>

      <div className="contGrid" id='Contact'>

        {/* 🔽 FORM START */}
        <form
          className="getDiv"
          action="https://formspree.io/f/mvzgqnbn"   
          method="POST"
        >
        <input type="hidden" name="_redirect" value="#Contact" />

          <h1>Get in touch</h1>

          <div className="nameEmail">
            <div>
              <p>First name</p>
              <input id='name1'
                type="text"
                placeholder="Name*"
                name="name"
                required
              />
            </div>

            <div>
              <p>Your Email</p>
              <input id='email'
                type="email"
                placeholder="Email*"
                name="email"
                required
              />
            </div>
          </div>

          <p>Subject</p>
          <input id='sub'
            type="text"
            placeholder="Subject*"
            name="subject"
            required
          />

          <p>Your message</p>
          <textarea id='message'
            placeholder="Your message*"
            name="message"
            required
          ></textarea>

          <button className="send" type="submit">
            Send Message
          </button>
        </form>
        {/* 🔼 FORM END */}

        <div className="details">
          <div className="detailFlex">
            <div className="phoneIcon">
              <FaPhoneAlt />
            </div>
            <div className="phone">
              <p>Phone</p>
              <h2>+91 8189820917</h2>
            </div>

            <div className="emailIcon">
              <HiOutlineMail />
            </div>
            <div className="email">
              <p>Mail</p>
              <h2>dhamodharan130602@gmail.com</h2>
            </div>

            <div className="locIcon">
              <MdLocationPin />
            </div>
            <div className="location">
              <p>Visit Me At</p>
              <h2>Nallavadu,<br />Pondicherry</h2>
            </div>
          </div>

          <div className="svgDiv">
            <img src={pic} alt="pic-svg" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="social">
            <FaFacebookF id='fb'/>
            <FaTwitter id='tw'/>
            <FaInstagram id='insta'/>
            <CiLinkedin id='in'/>
            <FaPinterest id='pin'/>
        </div>
        <div className="copyRights">
            <FaRegCopyright id='cr'/>
            <p>2025 copyright all right reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer
import React from 'react'
import './skills.css'
import avatar from "../../assets/avatar.jpg"
import { SiHtml5, SiCss3, SiReact, SiAngular } from 'react-icons/si';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { IoLogoNodejs } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import Contact from '../contact/contact';
import { Link } from 'react-scroll';

const Skills = () => {
  return (
    <>
    <section className="skillGrid">
        <div className="skills">
            <button className="expBtn">Experience</button>
            <h1 className="skills">Skills and Experience</h1>
            <p className="skillPara">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
            <br/>
            <h2>My Skills</h2>
            <div className="mySkills">
                <div className="htmlIcon">
                    <SiHtml5 size={50} title="HTML5" color='#6b61ff'/>
                    <p>HTML</p>
                </div>
                <div className="cssIcon">
                     <SiCss3 size={50} title="CSS3" color='#6b61ff' />
                    <p>CSS</p>
                </div>
                <div className="reactIcon">
                    <SiReact size={50} title="React"  color='#6b61ff'/>
                    <p>React</p>
                </div>
                <div className="angularIcon">
                    <SiAngular size={50} title="Angular"  color='#6b61ff'/>
                    <p>Angular</p>
                </div>
                <div className="appleIcon">
                   <IoLogoNodejs size={50} title="iOS"  color='#6b61ff'/>
                    <p>NodeJs</p>
                </div>
                <div className="androidIcon">
                     <FaDatabase size={50} title="Android"  color='#6b61ff'/>
                    <p>Database</p>
                </div>
            </div>
        </div>
        <div className="experience">
            <h1>Experience</h1>
            <section id='exp1'>
                <div className="one">
                    <h4>Sep - Dec 2025</h4>
                </div>
                <div className="two">
                    <h3>Full Stack Development Course</h3>
                    <p>Easto Technologies, Pondicherry</p>
                </div>
            </section>
            <section id='exp2'>
                <div className="one">
                    <h4>June - Nov 2025</h4>
                </div>
                <div className="two">
                    <h3>Delivery Executive & Purchase In-Charge</h3>
                    <p>Taka Pizza, Pondicherry</p>
                </div>
            </section>
            <section id='exp3'>
                <div className="one">
                    <h4>2020 - 2024</h4>
                </div>
                <div className="two">
                    <h3>Sales Executive</h3>
                    <p>Sri Vinayaga Electricals, Pondicherry</p>
                </div>
            </section>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            
            <button className="hireMe"><Link to='Contact' smooth={true}>Hire Me</Link></button>
            
        </div>
    </section>
    </>
  )
}

export default Skills
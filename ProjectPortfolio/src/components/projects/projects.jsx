import React from 'react'
import './projects.css'
import pro1 from "../../assets/project-1.jpg"
import pro2 from "../../assets/project-2.jpg"
import pro3 from "../../assets/project-3.jpg"
import pro4 from "../../assets/project-4.jpg"
import pro5 from "../../assets/project-5.jpg"
import pro6 from "../../assets/project-6.jpg"

const Projects = () => {
  return (
    <>
    <div id="projects">
        <div className="latPro">
            <button className="portfolio">Portfolio</button>
            <h1>Latest Projects</h1>
        </div>
        <div className="proGrid">
            <div className="first">
                <img src={pro1} alt="project-1" />
                <h3>Employee Attendance & Payroll</h3>
                <p>MERN Full stack</p>
            </div>
            <div className="sec">
                <img src={pro2} alt="project-2" />
                <h3>Restaurant Ordering System</h3>
                <p>MERN Full stack</p>
            </div>
            <div className="third">
                <img src={pro3} alt="project-3" />
                <h3>Online Grocery & Meat Delivery Platform</h3>
                <p>MERN Full stack</p>
            </div>
            
        </div>
    </div>    
    </>
  )
}

export default Projects
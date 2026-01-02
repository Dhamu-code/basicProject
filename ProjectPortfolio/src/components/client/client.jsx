import React from 'react'
import './client.css'
import ava2 from '../../assets/avatar-2.jpg'
import ava3 from '../../assets/avatar-3.jpg'
import ava4 from '../../assets/avatar-4.jpg'

const Client = () => {
  return (
    <>
    <section id='client'>
        <div className="clientWord">
            <button className="test">Curriculum</button>
            <h1>Education</h1>
        </div>
        <div className="clientFlex">
            <div className="one">
                <img src={ava2} alt="avatar-2" />
                <p>Bachelor of Science in Computer Science, a three-year undergraduate degree focusing on the theoretical and practical applications of computing, programming language.</p><br/>
                <p id='name'>RGASC</p>
                <p>Thavalakuppam, Pondy</p>
            </div>
             <div className="two">
                <img src={ava3} alt="avatar-2" className='img2'/>
                <p>Higher Secondary Education - Commerce Stream. focuses on business, finance, and economics</p><br/>
                <p id='name'>Govt. Higher Secondary School</p>
                <p>Thavalakuppam, Pondy</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Client



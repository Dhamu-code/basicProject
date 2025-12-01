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
            <button className="test">Testimonial</button>
            <h1>Client's Kind Word</h1>
        </div>
        <div className="clientFlex">
            <div className="one">
                <img src={ava2} alt="avatar-2" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p><br/>
                <p id='name'>Jennifer Lutheran</p>
                <p>CEO at pxdraft</p>
            </div>
             <div className="two">
                <img src={ava3} alt="avatar-2" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p><br/>
                <p id='name'>Jennifer Lutheran</p>
                <p>CEO at pxdraft</p>
            </div>
             <div className="three">
                <img src={ava4} alt="avatar-2" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p><br/>
                <p id='name'>Jennifer Lutheran</p>
                <p>CEO at pxdraft</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Client



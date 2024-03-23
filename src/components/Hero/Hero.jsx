import React from 'react'
import "./Hero.css"
export const Hero = () => {
  return (
   <section className="hero-container">
    <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>Passionate FrontEnd Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
    </div>
       
   <div className="hero-img">
    <div>
       
        <img className='super-img' src="./assets/images/spr.png" alt="" />
    </div>
     <div>
     <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
        </div>
        <div className="tech-icon">
            <img src="./assets/images/ht.png" alt="" />
        </div>
        <div className="tech-icon">
            <img src="./assets/images/css.png" alt="" />
        </div>
        <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
        </div>
     </div>


   </div>


   </section>
  )
}

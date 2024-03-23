import React from 'react'
import "./ContactMe.css"
import ConCard from './ConCard/ConCard'
import ConForm from './ConForm/ConForm'

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
            <ConCard iconUrl='./assets/images/mail.png' text="abubakarmhr011@gmail.com"/>
                <ConCard iconUrl='./assets/images/Git.png' text="https://github.com/MhrAbubakar"/>
                <ConCard iconUrl='./assets/images/whatsapp.png' text="+923100709094"/>
                <ConCard iconUrl='./assets/images/ins.png' text="https://www.instagram.com/the_critical_coder/"/>
            </div>
            <div style={{flex:1}}> <ConForm/> </div>
        </div>
    </section>
  )
}

export default ContactMe
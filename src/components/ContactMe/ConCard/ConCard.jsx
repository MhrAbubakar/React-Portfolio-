import React from 'react'
import "./ConCard.css"

const ConCard = ({iconUrl,text}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text}/>
        </div>
        <p>{text}</p>
    </div>

  )
}

export default ConCard
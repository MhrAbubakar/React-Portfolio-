import React from 'react'
import "./ExCard.css"
const ExCard = ({details}) => {
  return (
    <div className='work-experience-card'>
        <h6>{details.title}</h6>
        <div className="work-duration">{details.date}</div>
       <ul>
        {details.responsibilities.map((item)=>(
            <li key={item}>{item}</li>
        ))}
       </ul>

    </div>
  )
}

export default ExCard
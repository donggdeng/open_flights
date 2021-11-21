import React from 'react'
import './Rating.css'

function Rating({score}) {
    const score_in_percent = (score / 5) * 100

    return (
        <div className="star__container">
        <span className="stars" style={{width: score_in_percent + "%"}}></span>
            
        </div>
    )
}

export default Rating

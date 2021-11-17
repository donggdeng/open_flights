import React from 'react'
import { Link } from 'react-router-dom'

function Airline({image_url, name, avg_score, slug}) {
    return (
        <div className="card">
            <div className="airline__logo">
                <img src={image_url} alt={name} />
            </div>

            <div className="airline__name">{name}</div>
            <div className="airline__score">{avg_score}</div>
            <div className="airline__link">
                <Link to={`/airlines/${slug}`}>
                    View Airline
                </Link>
            </div>
            
        </div>
    )
}

export default Airline

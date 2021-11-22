import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import './Airline.css'

function Airline({image_url, name, avg_score, slug}) {
    return (
        <div className="card">
            <div className="airline__logo">
                <img src={image_url} alt={name} />
            </div>
            <div className="airline__name">{name}</div>
            <Rating score={avg_score} />
            {/* <div className="airline__score">{avg_score}</div> */}
            <div className="airline__link">
                <Link to={`/airlines/${slug}`}>
                    View Airline
                </Link>
            </div>
            
        </div>
    )
}

export default Airline

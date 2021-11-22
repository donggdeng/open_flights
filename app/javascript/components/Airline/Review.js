import React from 'react'
import '../../../assets/stylesheets/Airline/Review.css'
import Rating from '../Rating/Rating'

function Review(props) {
    const { score, title, description } = props.attributes
    return (
        <div className="reviewCard">
        <div className="review__rating__container">
                <Rating score={score} />
            </div>
            <div className="review__title">{title}</div>
            <div className="review__description">{description}</div>
            
        </div>
    )
}

export default Review

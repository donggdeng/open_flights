import React from 'react'
import './Header.css'

function Header({name, image_url, avg_score, slug, reviews}) {

    const total = reviews.length
    console.log("this is reviews >>>", reviews)

    return (
        <div className="airline_header">
            <h1><img src={image_url} alt={name} />{name}</h1>
            <div>
                <div className="totalReviews">{total} User Reviews</div>
                <div className="starRating"></div>
                <div className="totalOutOf">{avg_score} out of 5</div>
            </div>
        </div>
    )
}

export default Header

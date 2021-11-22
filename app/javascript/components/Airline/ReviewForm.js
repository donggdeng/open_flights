import React, { Fragment } from 'react'
import '../../../assets/stylesheets/Airline/ReviewForm.css'

function ReviewForm({name, handleChange, handleSubmit, setRating, review}) {
    const ratingOptions = [5,4,3,2,1].map( (score, index) => (
        <Fragment key={score}>
            <input type="radio" value={score} checked={review.score == score} name="rating" onChange={() => console.log("selected:", score)} id={`rating-${score}`}/>
            <label onClick={setRating.bind(this, score)}></label>
        </Fragment>
    ))

    return (
        <div className="reviewForm">
            <form onSubmit={handleSubmit}>
                <div className="reviewForm__intro">
                    <p>Have an experience with {name}? Share your review!</p>
                </div>
                <div className="reviewForm__field">
                    <input onChange={handleChange} type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className="reviewForm__field">
                    <input onChange={handleChange} type="text" name="description" placeholder="Write your review here."/>
                </div>
                <div className="reviewForm__field">
                    <div className="reviewForm__rating__container">
                        <div className="rating__title__text">
                            Rate This Airline
                        </div>
                    <div className="rating__box">
                            {ratingOptions}
                        </div>
                    </div>
                </div>
                <button type="submit">Submit Your Review</button>
            </form>
        </div>
    )
}

export default ReviewForm

import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import './Airline.css'

function Airline() {

    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    const { slug } = useParams()

    useEffect(()  => {
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
            .then( response => {
                setAirline(response.data)
                setLoaded(true)
            })
            .catch( response => console.log(response))
        
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log("reivew >>>", review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const airline_id = airline.data.id
        axios.post('/api/v1/reviews', {review, airline_id})
            .then(response => {
                const included = [...airline.included, response.data]
                setAirline({...airline, included})
                setReview({title: '', description: '', score: 0})
            })
            .catch(response => {})
    }

    const setRating = (score, e) => {
        e.preventDefault();

        setReview({...review, score})
    }

    return (
        <div className="airline__wrapper">
            {loaded &&
                <Fragment>
                    <div className="airline__column">
                        <div className="airline__info">
                                <Header 
                                    name={airline.data.attributes.name}
                                    image_url={airline.data.attributes.image_url}
                                    avg_score={airline.data.attributes.avg_score}
                                    slug={airline.data.attributes.slug}
                                    reviews={airline.data.relationships.reviews.data}
                                />
                            <div className="reviews"></div>
                        </div>
                    </div>
                    <div className="airline__column">
                        <ReviewForm
                            key={airline.data.attributes.name} 
                            name={airline.data.attributes.name}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}                            
                            setRating={setRating}
                            review={review}
                        />
                    </div>
                </Fragment>
            }
            
        </div>
    )
}

export default Airline

import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Airline from './Airline'

function Airlines() {

    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        //Get all of our airlines from api
        //Update airlinew in our state
        axios.get('/api/v1/airlines.json')
            .then(res => {
                setAirlines(res.data.data)
            })
            .catch(res => console.log(res))
    }, [airlines.length])

    return (
        <div className="home">
            <div className="airlines__header">
                <h1>OpenFlights</h1>
                <div className="airlines__subheader">
                    Honest, unbiased airline reviews.
                </div>
            </div>
            <div className="airlines_grid">
                {
                    airlines.map( item => (
                        <Airline
                            key={item.attributes.name}
                            image_url={item.attributes.image_url}
                            name={item.attributes.name}
                            avg_score={item.attributes.avg_score}
                            slug={item.attributes.slug}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Airlines

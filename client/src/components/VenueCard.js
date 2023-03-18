import React from 'react'

export default function VenueCard({venue}) {

    const { venue_name, venue_city, venue_state, venue_image } = venue

    return (
        <div>
            <img src={venue_image} alt={venue_name}/>
            <h3>venue: {venue_name}</h3>
            <h3>location: {venue_city}, {venue_state}</h3>
        </div>
    )
}

import React from 'react'
import NavBar from './NavBar'
import VenueCard from './VenueCard'

export default function MyVenues({onLogout, updateUser, allVenues}) {

    const displayVenues = allVenues.map((venue, index ) => (
        <VenueCard
            key={index}
            venue={venue}
        />
    ))

    return (
        <div>
            <NavBar onLogout={onLogout}/>
            <div>
                <h1>venues</h1>
                <div>{displayVenues}</div>
            </div>
        </div>
    )
}

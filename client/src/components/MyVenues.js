import React from 'react'
import NavBar from './NavBar'
import VenueCard from './VenueCard'
import { Link } from "react-router-dom";

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
                <Link to="/venue/new/:id">
                    <button
                        >add new venue
                    </button>
                </Link>
            </div>
            <div>
                <h1>venues</h1>
                <div>{displayVenues}</div>
            </div>
        </div>
    )
}

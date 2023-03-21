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
        <div class="bg-background h-screen text-white font-Comfortaa">
            <NavBar onLogout={onLogout}/>
            <div class="flex flex-row-reverse text-2xl p-3">
                <Link to="/new-venue">
                    <button
                        class="bg-pink rounded p-3 hover:bg-magenta"
                        >add new venue
                    </button>
                </Link>
            </div>
            <div class="text-6xl p-4">
                <h1>venues</h1>
            </div>
            <div>
                <div class="flex flex-wrap justify-items-start p-2 bg-background">{displayVenues}</div>
            </div>
        </div>
    )
}

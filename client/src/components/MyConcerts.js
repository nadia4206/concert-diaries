import React from 'react'
import NavBar from './NavBar'
import ConcertCard from './ConcertCard';

export default function MyConcerts({onLogout, allConcerts, onConcertDelete}) {

    const displayConcerts = allConcerts.map((concert, index) => (
        <ConcertCard
            key={index}
            concert={concert}
            onConcertDelete={onConcertDelete}
        />
    ))

    return (
        <div class="bg-background h-screen text-white font-Comfortaa">
            <NavBar onLogout={onLogout}/>
            <div>
                <h1 class="text-6xl p-4">concerts</h1>
                <div class="flex flex-wrap justify-items-start p-2 bg-background h-screen">
                    {displayConcerts}
                </div>
            </div>
        </div>
    )
}

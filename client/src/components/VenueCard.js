import React from 'react'

export default function VenueCard({venue}) {

    const { venue_name, venue_city, venue_state, venue_image } = venue

    return (
        <div class="block max-w-sm p-4 border-4 border-pink m-3 rounded bg-background space-y-2">
            <img 
                src={venue_image}
                alt={venue_name}
                class="object-contain h-48 w-96 border-2 border-white"
            />
            <h3>venue: {venue_name}</h3>
            <h3>location: {venue_city}, {venue_state}</h3>
        </div>
    )
}

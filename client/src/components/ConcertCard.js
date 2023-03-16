import React from 'react'

export default function ConcertCard({ac}) {

    const { show_date, highlight, image_url, user, artist, venue } = ac

    return (
        <div>
            <img src={image_url} alt="concert image"/>
            <h3>artist: {artist.artist_name}</h3>
            <h3>date: {show_date}</h3>
            <h3>venue: {venue.venue_name}</h3>
            <h3>highlight: {highlight}</h3>
            <h3>user: {user.username}</h3>
            <button>edit show</button>
            <button>delete show</button>
        </div>
    )
}

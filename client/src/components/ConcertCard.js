import React from 'react'
import { Link } from 'react-router-dom';

export default function ConcertCard({concert, onConcertDelete}) {

    const { id, show_date, highlight, image_url, user, artist, venue } = concert

    const handleDelete = () => {
        fetch(`/shows/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(onConcertDelete(concert))
    }

    return (
        <div class="block max-w-sm p-4 border-4 border-pink m-3 rounded bg-background space-y-2">
            <img
                src={image_url}
                alt="concert"
                class="object-contain h-48 w-96 border-2 border-white"
            />
            <h3>{artist.artist_name} @ {venue.venue_name}</h3>
            <h3>highlight: {highlight}</h3>
            <h3>date: {show_date}</h3>
            <h3>attendee: {user.username}</h3>
            <div class="flex flex-col space-y-4 items-center p-4 text-xl">
                <div class="bg-pink rounded p-2 hover:bg-magenta">
                    <Link to={`/concert/${id}/edit`}>
                        <button>
                            update show
                        </button>
                    </Link>
                </div>
                <div class="bg-pink rounded p-2 hover:bg-magenta">
                    <button
                        onClick={handleDelete}
                        >delete show
                    </button>
                </div>
            </div>
        </div>
    )
}

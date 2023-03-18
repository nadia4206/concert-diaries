import React from 'react'

export default function ArtistCard({artist}) {

    const { artist_name, genre, artist_image } = artist

    return (
        <div>
            <img src={artist_image} alt={artist_name}/>
            <h3>artist: {artist_name}</h3>
            <h3>genre: {genre}</h3>
        </div>
    )
}

import React from 'react'

export default function ArtistCard({artist}) {

    const { artist_name, genre, artist_image } = artist

    return (
        <div class="block max-w-sm p-4 border-4 border-pink m-3 rounded bg-background space-y-2">
            <img
                src={artist_image}
                alt={artist_name}
                class="object-contain h-48 w-96 border-2 border-white"
            />
            <h3>artist: {artist_name}</h3>
            <h3>genre: {genre}</h3>
        </div>
    )
}

import React from 'react'

export default function ArtistList({artist}) {

    const { id, artist_name } = artist

  return (
        <option>
            {id}: {artist_name}
        </option>
  )
}

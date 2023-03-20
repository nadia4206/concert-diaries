import React from 'react'

export default function VenueList({venue}) {

    const { id, venue_name } = venue

  return (
    <option>
            {id}: {venue_name}
        </option>
  )
}

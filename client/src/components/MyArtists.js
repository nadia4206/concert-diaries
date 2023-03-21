import React from 'react';
import NavBar from './NavBar';
import ArtistCard from './ArtistCard';
import { Link } from "react-router-dom";

export default function MyArtists({allArtists, onLogout}) {

    const displayArtists = allArtists.map((artist, index) => (
        <ArtistCard
            key={index}
            artist={artist}
        />
    ))

    return (
        <div>
            <NavBar onLogout={onLogout}/>
            <div>
                <Link to="/new-artist">
                    <button
                        >add new artist
                    </button>
                </Link>
            </div>
            <div>
                <h1>artists</h1>
                <div>{displayArtists}</div>
            </div>
        </div>
    )
}

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
        <div class="bg-background h-screen text-white font-Comfortaa">
            <NavBar onLogout={onLogout}/>
            <div class="flex flex-row-reverse text-2xl p-3">
                <Link to="/new-artist">
                    <button
                        class="bg-pink rounded p-3 hover:bg-magenta"
                        >add new artist
                    </button>
                </Link>
            </div>
            <div class="text-6xl p-4">
                <h1>artists</h1>
            </div>
            <div>
                <div class="flex flex-wrap justify-items-start p-2 bg-background">
                    {displayArtists}
                </div>
            </div>
        </div>
    )
}

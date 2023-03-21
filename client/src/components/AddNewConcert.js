import React from 'react'
import ArtistList from './ArtistList'
import VenueList from './VenueList'
import UserList from './UserList';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './NavBar';

export default function AddNewConcert({ allArtists, allVenues, allUsers, onAddConcert, onLogout }) {

    const displayArtists = allArtists.map((artist, index) => (
        <ArtistList
            key={index}
            artist={artist}
        />
    ))

    const displayVenues = allVenues.map((venue, index) => (
        <VenueList
            key={index}
            venue={venue}
        />
    ))

    const displayUsers = allUsers.map((user, index) => (
        <UserList
            key={index}
            user={user}
        />
    ))

    const initialState = {
        user_id: "",
        artist_id: "",
        venue_id: "",
        show_date: "",
        highlight: "",
        image_url: ""
    }

    let navigate = useNavigate();

    const [ formData, setFormData ] = useState(initialState);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newConcert = {
            user_id: formData.user_id,
            artist_id: formData.artist_id,
            venue_id: formData.venue_id,
            show_date: formData.show_date,
            highlight: formData.highlight,
            image_url: formData.image_url
        }
        fetch('/shows', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(newConcert)
        })
        .then(res => {
            if(res.ok){
                res.json().then(onAddConcert)
                navigate("/concerts")
            } else {
                res.json().then(alert("user, artist, venue, and show date must be present"))
            }
        })
    }

    return (
        <div class="bg-background h-screen font-Comfortaa">
            <div class="mb-10">
                <NavBar onLogout={onLogout}/>
            </div>
            <div>
                <h1 class="text-white text-5xl text-center bg-gradient-to-r from-magenta to-purple p-5 mx-96 rounded">add new concert</h1>
            </div>
            <div class="bg-pink flex flex-col items-center justify-center p-2 mx-96 rounded">
                <form onSubmit={handleSubmit}>
                <label class="text-white text-xl">select user:</label>
                    <select
                        type="text"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleChange}
                        class="w-full mr-3 h-10 rounded mb-2"
                        >{displayUsers}
                    </select>
                    <label class="text-white text-xl">select artist:</label>
                    <select
                        type="text"
                        name="artist_id"
                        value={formData.artist_id}
                        onChange={handleChange}
                        class="w-full mr-3 h-10 rounded mb-2"
                        >{displayArtists}
                    </select>
                    <label class="text-white text-xl">select venue:</label>
                    <select
                        type="text"
                        name="venue_id"
                        value={formData.venue_id}
                        onChange={handleChange}
                        class="w-full mr-3 h-10 rounded mb-2"
                        >{displayVenues}
                    </select>
                    <label class="text-white text-xl">date:</label>
                    <input
                        type="date"
                        name="show_date"
                        value={formData.show_date}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">highlight:</label>
                    <input
                        type="text"
                        name="highlight"
                        placeholder="concert highlight"
                        value={formData.highlight}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">image:</label>
                    <input
                        type="text"
                        name="image_url"
                        placeholder="concert image url"
                        value={formData.image_url}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <div class="flex flex-col items-center">
                        <button
                            type="submit"
                            class="text-white p-4 text-3xl hover:bg-background rounded bg-magenta border"
                            >add concert
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

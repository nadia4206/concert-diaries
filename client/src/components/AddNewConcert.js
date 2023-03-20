import React from 'react'
import ArtistList from './ArtistList'
import VenueList from './VenueList'
import UserList from './UserList';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddNewConcert({ allArtists, allVenues, allUsers }) {

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
        .then( res => res.json())
        .then( data => console.log(data))
    }

    return (
        <div>
            <h1>add new concert</h1>
            <form onSubmit={handleSubmit}>
            <label>select user:</label>
                <select
                    type="text"
                    name="user_id"
                    value={formData.user_id}
                    onChange={handleChange}
                    >{displayUsers}
                </select>
                <label>select artist:</label>
                <select
                    type="text"
                    name="artist_id"
                    value={formData.artist_id}
                    onChange={handleChange}
                    >{displayArtists}
                </select>
                <label>select venue:</label>
                <select
                    type="text"
                    name="venue_id"
                    value={formData.venue_id}
                    onChange={handleChange}
                    >{displayVenues}
                </select>
                <label>date:</label>
                <input
                    type="date"
                    name="show_date"
                    value={formData.show_date}
                    onChange={handleChange}
                />
                <label>highlight:</label>
                <input
                    type="text"
                    name="highlight"
                    placeholder="concert highlight"
                    value={formData.highlight}
                    onChange={handleChange}
                />
                <label>image:</label>
                <input
                    type="text"
                    name="image_url"
                    placeholder="concert image url"
                    value={formData.image_url}
                    onChange={handleChange}
                />
                <div>
                    <button>add concert</button>
                </div>
            </form>
        </div>
    )
}

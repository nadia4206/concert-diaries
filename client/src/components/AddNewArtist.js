import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddNewArtist({onAddArtist}) {

    const initialState = {
        artist_name: "",
        genre: "",
        artist_image: ""
    }

    let navigate = useNavigate();

    const [ formData, setFormData ] = useState(initialState)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArtist = {
            artist_name: formData.artist_name,
            genre: formData.genre,
            artist_image: formData.artist_image
        }
        fetch('/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(newArtist)
        })
        .then(res => res.json())
        .then(onAddArtist)
        navigate("/:username/artists")
        setFormData(initialState)
    }

    return (
        <div>
            <h1>add new artist</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>name:</label>
                    <input
                        type="text"
                        name="artist_name"
                        placeholder="artist name"
                        value={formData.artist_name}
                        onChange={handleChange}
                    />
                    <label>genre:</label>
                    <input
                        type="text"
                        name="genre"
                        placeholder="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                    <label>name:</label>
                    <input
                        type="text"
                        name="artist_image"
                        placeholder="artist image url"
                        value={formData.artist_image}
                        onChange={handleChange}
                    />
                    <div>
                        <button
                            >add artist
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './NavBar';

export default function AddNewArtist({onAddArtist, onLogout}) {

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
        .then(res => {
            if(res.ok){
                res.json().then(onAddArtist)
                navigate("/artists")
            } else {
                res.json().then(alert("artist name, genre, and image must be present"))
            }
        })
    }

    return (
        <div class="bg-background h-screen font-Comfortaa">
            <div class="mb-10">
                <NavBar onLogout={onLogout}/>
            </div>
            <div class="text-white text-5xl text-center bg-gradient-to-r from-magenta to-purple p-5 mx-96 rounded">
                <h1>add new artist</h1>
            </div>
            <div class="bg-pink flex flex-col items-center justify-center p-2 mx-96 rounded">
                <form onSubmit={handleSubmit}>
                    <label class="text-white text-xl">name:</label>
                    <input
                        type="text"
                        name="artist_name"
                        placeholder="artist name"
                        value={formData.artist_name}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">genre:</label>
                    <input
                        type="text"
                        name="genre"
                        placeholder="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">image:</label>
                    <input
                        type="text"
                        name="artist_image"
                        placeholder="artist image url"
                        value={formData.artist_image}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <div class="flex flex-col items-center">
                        <button
                            type="submit"
                            class="text-white p-4 text-3xl hover:bg-background rounded bg-magenta border"
                            >add artist
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

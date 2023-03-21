import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './NavBar';

export default function AddNewVenue({onAddVenue, onLogout}) {

    const initialState = {
        venue_name: "",
        venue_city: "",
        venue_state: "",
        venue_image: ""
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
        const newVenue = {
            venue_name: formData.venue_name,
            venue_city: formData.venue_city,
            venue_state: formData.venue_state,
            venue_image: formData.venue_image
        }
        fetch('/venues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(newVenue)
        })
        .then(res => {
            if(res.ok){
                res.json().then(onAddVenue)
                navigate("/venues")
            } else {
                res.json().then(alert("venue name, venue city, and venue image must be present"))
            }
        })
    };

    return (
        <div class="bg-background h-screen font-Comfortaa">
            <div class="mb-10">
                <NavBar onLogout={onLogout}/>
            </div>
            <div class="text-white text-5xl text-center bg-gradient-to-r from-magenta to-purple p-5 mx-96 rounded">
                <h1>add new venue</h1>
            </div>
            <div class="bg-pink flex flex-col items-center justify-center p-2 mx-96 rounded">
                <form onSubmit={handleSubmit}>
                    <label class="text-white text-xl">name:</label>
                    <input
                        type="text"
                        name="venue_name"
                        placeholder="venue name"
                        value={formData.venue_name}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">city:</label>
                    <input
                        type="text"
                        name="venue_city"
                        placeholder="venue city"
                        value={formData.venue_city}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">state:</label>
                    <input
                        type="text"
                        name="venue_state"
                        placeholder="venue state"
                        value={formData.venue_state}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">image:</label>
                    <input
                        type="text"
                        name="venue_image"
                        placeholder="venue image url"
                        value={formData.venue_image}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <div class="flex flex-col items-center">
                        <button
                            type="submit"
                            class="text-white p-4 text-3xl hover:bg-background rounded bg-magenta border"
                            >add venue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

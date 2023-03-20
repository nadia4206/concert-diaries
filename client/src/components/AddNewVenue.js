import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddNewVenue({onAddVenue}) {

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
        .then(res => res.json())
        .then(onAddVenue)
        navigate("/:username/venues")
        setFormData(initialState)
    };

    return (
        <div>
            <h1>add new venue</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>name:</label>
                    <input
                        type="text"
                        name="venue_name"
                        placeholder="venue name"
                        value={formData.venue_name}
                        onChange={handleChange}
                    />
                    <label>city:</label>
                    <input
                        type="text"
                        name="venue_city"
                        placeholder="venue city"
                        value={formData.venue_city}
                        onChange={handleChange}
                    />
                    <label>state:</label>
                    <input
                        type="text"
                        name="venue_state"
                        placeholder="venue state"
                        value={formData.venue_state}
                        onChange={handleChange}
                    />
                    <label>image:</label>
                    <input
                        type="text"
                        name="venue_image"
                        placeholder="venue image url"
                        value={formData.venue_image}
                        onChange={handleChange}
                    />
                    <div>
                        <button
                            >add venue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

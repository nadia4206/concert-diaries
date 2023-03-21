import React from 'react'
import NavBar from './NavBar'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateConcert({onUpdatedConcert, onLogout}) {

    let navigate = useNavigate();

    const { id } = useParams();

    const [ formData, setFormData ] = useState({
        highlight: "",
        image_url: ""
    })

    useEffect(() => {
        fetch(`/shows/${id}`)
        .then(res => res.json())
        .then(concerts => setFormData(concerts))
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/shows/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((updatedConcert) => {
            onUpdatedConcert(updatedConcert)
        })
        navigate("/concerts")
    }


    return (
        <div class="bg-background h-screen font-Comfortaa">
            <div class="mb-10">
                <NavBar onLogout={onLogout}/>
            </div>
            <div class="text-white text-5xl text-center bg-gradient-to-r from-magenta to-purple p-5 mx-96 rounded">
                <h1>update concert</h1>
            </div>
            <div class="bg-pink flex flex-col items-center justify-center p-2 mx-96 rounded">
                <form onSubmit={handleSubmit}>
                    <label class="text-white text-xl">highlight:</label>
                    <input
                        type="text"
                        name="highlight"
                        value={formData.highlight}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <label class="text-white text-xl">image:</label>
                    <input
                        type="text"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                        class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                    />
                    <div class="flex flex-col items-center">
                        <button
                            type="submit"
                            class="text-white p-4 text-2xl hover:bg-background rounded bg-magenta border"
                            >update concert
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

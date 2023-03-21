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
        <div>
            <NavBar onLogout={onLogout}/>
            <h1>update concert</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>highlight:</label>
                    <input
                        type="text"
                        name="highlight"
                        value={formData.highlight}
                        onChange={handleChange}
                    />
                    <label>image:</label>
                    <input
                        type="text"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                    />
                    <div>
                        <button>update concert</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

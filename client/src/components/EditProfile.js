import React from 'react'
import NavBar from './NavBar'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export default function EditProfile({onLogout, onUpdatedProfile}) {

    let navigate = useNavigate();

    const { id } = useParams();

    const [ formData, setFormData ] = useState({
        email: "",
        username: "",
        password: ""
    })

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => res.json())
        .then(user => setFormData(user))
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((updatedProfile) => {
            onUpdatedProfile(updatedProfile)
        })
        navigate("/concerts")
    }

    return (
        <div>
            <NavBar onLogout={onLogout}/>
            <h1>update profile</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label>username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <label>password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <div>
                        <button
                            type="submit"
                            >update profile
                        </button>
                    </div>
                </form>
                <div>
                    <button>delete profile</button>
                </div>
            </div>
        </div>
    )
}

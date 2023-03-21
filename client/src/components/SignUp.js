import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function SignUp() {

    const [ formData, setFormData ] = useState({
        email: '',
        username:'',
        password: ''
    })

    const navigate = useNavigate();

    const { email, username, password } = formData

    function onSubmit(e){
        e.preventDefault();
        const user = {
            email,
            username,
            password
        }
        fetch("/users", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate("/concerts")
                })
            } else {
                res.json().then(alert("email must be present, username must be unique, password must exist"))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }


    return (
        <div>
            <div>
                <h1>the concert diaries</h1>
            </div>
            <div>
                <h2>sign up</h2>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <label>email:</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={handleChange}
                        />

                    <label>create username:</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={handleChange}
                        />
                    <label>create password:</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={handleChange}
                        />
                    <div>
                        <button
                            type="submit"
                            >sign up
                        </button>
                    </div>
            </form>
            </div>
        </div>
    )
}

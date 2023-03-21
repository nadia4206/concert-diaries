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
        <div class="bg-background h-screen font-Comfortaa">
            <div>
                <h1 class="text-6xl text-white p-4">the concert diaries</h1>
            </div>
            <div>
                <div>
                    <h2 class="text-white text-5xl text-center bg-gradient-to-r from-magenta to-purple p-5 mx-96 rounded">sign up</h2>
                </div>
            </div>
            <div class="bg-pink flex flex-col items-center justify-center p-2 mx-96 rounded">
                <form onSubmit={onSubmit}>
                    <label class="text-white text-xl">email:</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={handleChange}
                            class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                        />

                    <label class="text-white text-xl">create username:</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={handleChange}
                            class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                        />
                    <label class="text-white text-xl">create password:</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={handleChange}
                            class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                        />
                    <div class="flex flex-col items-center">
                        <button
                            type="submit"
                            class="text-white p-4 text-xl hover:bg-background rounded bg-magenta border"
                            >sign up
                        </button>
                    </div>
            </form>
            </div>
        </div>
    )
}

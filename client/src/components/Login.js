import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function Login({updateUser}) {
    const navigate = useNavigate();

    // establishing state
    const initialState = {
        username: '',
        password: ''
    };
    const [formData, setFormData] = useState(initialState);

    //handle login submission
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    navigate('/concerts')
                })
            } else {
                res.json().then((alert("enter a valid username/password")))
            }
        })
    }

    //handle controlled form changes
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div class="bg-background h-screen font-Comfortaa">
            <div>
                <h1 class="text-6xl text-white p-4">the concert diaries</h1>
            </div>
            <div class="my-11">
                <div>
                    <h2 class="text-white text-4xl text-center bg-gradient-to-r from-magenta to-purple p-5 mx-96 rounded">login</h2>
                </div>
                <div class="bg-pink flex flex-col items-center justify-center p-2 mx-96 rounded">
                    <form onSubmit={handleSubmit}>
                        <input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={formData.username}
                            onChange={handleChange}
                            class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"

                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                            class="w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                        />
                        <div class="flex flex-col items-center">
                            <button
                                type="submit"
                                class="text-white p-4 text-3xl hover:bg-background rounded"
                                >login
                            </button>
                        </div>
                    </form>
                    <Link to="/signup">
                        <button
                            class="text-white p-4 text-3xl hover:bg-background rounded"
                            >sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

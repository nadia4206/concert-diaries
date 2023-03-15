import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function Login({updateUser}) {
    const navigate = useNavigate();

    // state for form
    const initialState = {
        username: '',
        password: ''
    };
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState([])

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
                    navigate(`/${user.username}/concerts`)
                })
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <div>
                <h1>the concert diaries</h1>
            </div>
            <div>
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                        value={formData.username}
                        onChange={handleChange}

                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <div>
                        <button
                            type="submit"
                            >login
                        </button>
                    </div>
                </form>
                <div>
                    <Link to="/signup">
                    <button>sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

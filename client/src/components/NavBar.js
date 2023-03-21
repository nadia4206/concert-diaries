import React from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom';


export default function NavBar({onLogout}) {

    let navigate = useNavigate();

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout())
        navigate("/")
    }

    return (
        <div>
            <div>
                <header class="bg-gradient-to-r from-magenta to-purple font-Comfortaa text-white p-4">
                    <div class="flex space-x-9">
                        <NavLink
                            to={"/concerts"}
                            >home
                        </NavLink>
                        <NavLink
                            to={"/new-concert"}
                            >add concert
                        </NavLink>
                        <NavLink
                            to={"/artists"}
                            >artists
                        </NavLink>
                        <NavLink
                            to={"/venues"}
                            >venues
                        </NavLink>
                        <Link
                            onClick={handleLogout} 
                            to="/"
                            >logout
                        </Link>
                    </div>
                </header>
            </div>
        </div>
    )
}

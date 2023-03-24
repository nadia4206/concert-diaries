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
                <header class="bg-gradient-to-r from-magenta to-purple font-Comfortaa text-white p-6">
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
                    {/* <div>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/5854/5854842.png"
                            class="object-contain h-18 w-16 absolute right-1 top-1 text-white"
                        />
                    </div> */}
                </header>
            </div>
        </div>
    )
}

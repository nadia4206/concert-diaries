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
                <NavLink to={"/:username/concerts"}>the concert diaries</NavLink>
                <NavLink to={"/:username/concerts/:id/edit"}>add concert</NavLink>
                <NavLink to={"/:username/artists"}>artists</NavLink>
                <NavLink to={"/:username/venues"}>venues</NavLink>
                <Link onClick={handleLogout} to="/">logout</Link>
            </div>
        </div>
    )
}

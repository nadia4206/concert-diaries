import React from 'react'
import NavBar from './NavBar'
import ConcertCard from './ConcertCard';
import { Link } from "react-router-dom";

export default function MyConcerts({onLogout, updateUser, allConcerts}) {

    const displayConcerts = allConcerts.map((ac, index) => (
        <ConcertCard
            key={index}
            ac={ac}
        />
    ))

    return (
        <div>
            <NavBar onLogout={onLogout}/>
            <div>
                <h1>concerts</h1>
                <div>{displayConcerts}</div>
            </div>
        </div>
    )
}

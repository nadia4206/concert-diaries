import React from 'react'
import NavBar from './NavBar'
import { useState, useEffect } from 'react';
import ConcertCard from './ConcertCard';

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
                <h1>my concerts</h1>
                <div>{displayConcerts}</div>
            </div>
        </div>
    )
}

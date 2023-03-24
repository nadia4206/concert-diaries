import React from 'react'
import NavBar from './NavBar'

export default function Welcome({onLogout}) {
    return (
        <div class="bg-background h-screen font-Comfortaa">
            <div>
                <NavBar onLogout={onLogout}/>
            </div>
            <div>
                <h1 class="text-6xl text-white p-4 mb-5">the concert diaries</h1>
            </div>
            <div class="text-white text-4xl p-5">
                <p>“One good thing about music, when it hits you, you feel no pain.”</p>
                <p class="mt-5 ml-8">-Bob Marley</p>
            </div>
        </div>
    )
}

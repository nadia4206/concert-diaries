import React from 'react'
import NavButton from "./NavButton";

export default function NavBar() {

    return (
        <div>
            <NavButton buttonText={"the concert diaries"} path="/:username/concerts"/>
            <NavButton buttonText={"add concert"} path="/concert/new/:id"/>
            <NavButton buttonText={"artists"} path="/:username/artists"/>
            <NavButton buttonText={"venues"} path="/:username/venues"/>
            <NavButton
                buttonText={"logout"}
                path="/"
            />
        </div>
    )
}

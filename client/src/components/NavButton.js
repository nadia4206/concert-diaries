import React from "react";
import { NavLink } from "react-router-dom";

function NavButton({ buttonText, path }) {
    return (
        <NavLink exact to={path}>{buttonText}</NavLink>
    )
}

export default NavButton;
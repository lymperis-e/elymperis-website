import { useState } from 'react'
import './Navbar.css'

function Navbar() {


    return (
        <nav id="navbar">
            <a className="nav-link nav-dark active" href="/index.html">// Home</a>
            <a className="nav-link nav-dark" href="/bio.html">// Bio</a>
            <a className="nav-link nav-dark" href="/projects.html">// Projects</a>
        </nav>
    )

}

export default Navbar
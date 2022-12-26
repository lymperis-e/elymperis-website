import { Outlet, NavLink  } from "react-router-dom";
import './Navbar.css'

function Navbar() {


    return (
        <>
            <nav id="navbar">
                <NavLink to="/" className="nav-link nav-dark" >// Home</NavLink>
                <NavLink to="/bio" className="nav-link nav-dark" >// Bio</NavLink>
                <NavLink to="/projects" className="nav-link nav-dark" >// Projects</NavLink>
            </nav>

            <Outlet />
        </>

    )

}

export default Navbar
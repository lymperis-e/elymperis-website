import { Outlet, NavLink  } from "react-router-dom";
import './Navbar.css'

function Navbar() {


    return (
        <>
            <nav id="navbar">
                <NavLink to="/" className="nav-link nav-dark" >&#62; Home </NavLink>
                <NavLink to="/bio" className="nav-link nav-dark" >&#62; Bio</NavLink>
                <NavLink to="/projects" className="nav-link nav-dark" >&#62; Projects</NavLink>
                <NavLink to="/maps" className="nav-link nav-dark" >&#62; Maps</NavLink>

            </nav>

            <Outlet />
        </>

    )

}

export default Navbar
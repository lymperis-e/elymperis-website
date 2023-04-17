import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";



function NavbarComponent(args) {
    const dropdownRef = useRef(null);

    const handleNavLinkClick = () => {
        dropdownRef.current?.click();
    };

    return (
        <>

            <div className="z-50 flex w-full component-preview p-0 items-center justify-center gap-2  fixed top-[0] l-0 shadow-lg  bg-opacity-80" id="newnav">
                <Navbar >
                    <Navbar.Start>
                        
                        <Dropdown ref={dropdownRef}>
                            <Button color="ghost" tabIndex={0} className="lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </Button>
                            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3" style={{backgroundColor:"#fffef5"}}>

                                {/*<Menu.Title>
                                    <span>Maps</span>
                                </Menu.Title>*/}

                                <NavLink to="/"         className="btn btn-ghost text-left" > Home </NavLink>
                                <NavLink to="/bio"      className="btn btn-ghost text-left" > Bio</NavLink>
                                <NavLink to="/projects" className="btn btn-ghost text-left" > Projects</NavLink>
                                <NavLink to="/maps"     className="btn btn-ghost text-left" > Maps</NavLink>

                            </Dropdown.Menu>
                        </Dropdown>



                    </Navbar.Start>


                    <Navbar.Center className="hidden lg:flex ">
                        <Menu horizontal className="p-0">

                            <NavLink to="/"         className="nav-link " >&#62; Home </NavLink>
                            <NavLink to="/bio"      className="nav-link " >&#62; Bio</NavLink>
                            <NavLink to="/projects" className="nav-link " >&#62; Projects</NavLink>
                            <NavLink to="/maps"     className="nav-link " >&#62; Maps</NavLink>

                        </Menu>

                    </Navbar.Center>


                    <Navbar.End>

                        {/*<Button>Get started</Button>*/}
                    </Navbar.End>
                </Navbar>


            </div>
            <Outlet />
        </>



    );
};

export default NavbarComponent;
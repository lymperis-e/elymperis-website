import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";
import ThemeToggle from "./Theme/ThemeToggle";


function NavbarComponent(args) {
    const dropdownRef = useRef(null);

    const handleNavLinkClick = () => {
        dropdownRef.current?.click();
    };

    return (
        <>

            <div className="z-50 flex w-full component-preview p-0  gap-2 mx-0 fixed top-[0] left-0 shadow-lg bg-opacity-80 backdrop-blur-md border-b-primary border-b">
                <Navbar >
                    <Navbar.Start>

                        <Dropdown ref={dropdownRef}>
                            <Button color="ghost" tabIndex={0} className="lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </Button>
                            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3 bg-base-100" style={{ backgroundColor: "#fffef5" }}>

                                {/*<Menu.Title>
                                    <span>Maps</span>
                                </Menu.Title>*/}

                                <NavLink to="/" className="btn btn-ghost text-left" > Home </NavLink>
                                <NavLink to="/bio" className="btn btn-ghost text-left" > Bio</NavLink>
                                <NavLink to="/projects" className="btn btn-ghost text-left" > Projects</NavLink>
                                <NavLink to="/maps" className="btn btn-ghost text-left" > Maps</NavLink>

                            </Dropdown.Menu>
                        </Dropdown>



                    </Navbar.Start>


                    <Navbar.Center >
                    </Navbar.Center>


                    <Navbar.End >

                        <div className="hidden lg:flex ">
                            <Menu horizontal className="p-0 mr-5">

                                <NavLink to="/" className="nav-link " >Home </NavLink>
                                <NavLink to="/bio" className="nav-link " >Bio</NavLink>
                                <NavLink to="/projects" className="nav-link " >Projects</NavLink>
                                <NavLink to="/maps" className="nav-link " >Maps</NavLink>

                            </Menu>
                        </div>



                        <ThemeToggle light='retro' dark='catppuccin' />

                    </Navbar.End>
                </Navbar>


            </div>
            <Outlet />
        </>



    );
};

export default NavbarComponent;
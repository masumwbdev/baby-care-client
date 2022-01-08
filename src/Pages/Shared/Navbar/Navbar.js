import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import TopNav from '../TopNav/TopNav';
import SecondNav from '../SecondNav/SecondNav'
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useFirebase();
    console.log(user)
    return (
        <div className="main-nav">
            <div className="">
                {/* <TopNav></TopNav> */}
                <SecondNav></SecondNav>
                <nav class="main-nav-container navbar navbar-expand-lg navbar-light container-fluid third-nav fs-6 fw-bold">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                                <li class="nav-item">
                                    <NavLink className="link nav-link"
                                        to="/home"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="link nav-link"
                                        to="/explore"
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                {user.email && <li class="nav-item">
                                    <NavLink className="link nav-link"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>}
                            </ul>
                            <form class="d-flex">
                                <span className=" me-3 mt-2">{user?.displayName}</span>
                                {user?.email ?
                                    <i onClick={logOut} class="fas fa-sign-out-alt me-5 mt-2 fs-4"></i> :
                                    <NavLink className="signin-button" to="/login">Sign in <i class="fas fa-sign-in-alt me-5 ms-2 mt-1 fs-5 login-icon"></i></NavLink>
                                }
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ChattyLogo.svg";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <Link to={"/"} className="d-flex justify-content-center align-items-center">
                    <img
                        src={Logo}
                        alt="Chatty"
                        height={24}
                        className="nav-logo"
                    />
                    <span className="navbar-brand nav-title">Chatty</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

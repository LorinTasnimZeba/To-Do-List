import React from "react";
import "./navbar.css";
import { RiTodoFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (<div> <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <b><RiTodoFill />&nbsp;
                    To-Do</b>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" aria-current="page" to="/todo">todo</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active btn-nav" aria-current="page" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active btn-nav" aria-current="page" to="signin">Sign In</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active btn-nav" aria-current="page" to="#">Logout</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" aria-current="page" to="#">
                            <img className="img-fluid user-img" src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" />
                        </Link>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
        </div>
    </nav> </div>
    )
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Nav.css";
import logo from '../Images/logo.png';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link to="/" style={{maxWidth:"15%"}}>
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/events">Events & Exhibitions</Link>
            </li>
            <li className="nav-item">
              <Link to="/news">News</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="#">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#">
                  <i className="fa fa-commenting"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

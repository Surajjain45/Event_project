import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
// import  {HamburgetMenuOpen} from "./Icons.jsx";
import { FaBars } from "react-icons/fa6"
// import logo from '/logo_final.png';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar font-mont">
        <div className="nav-container">
          <div className="nav-logo">
            Event Heading
            {/* <i className="fas fa-code"></i> */}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/upcoming"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Buy
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/previousmatches"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Predictions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <FaBars />{" "}
              </span>
            ) : (
              <span className="icon">
                <FaBars />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
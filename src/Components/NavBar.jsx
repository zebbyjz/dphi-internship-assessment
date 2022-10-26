import React from "react";
import { Link } from "react-router-dom";
import logo from "../dphi_logo.svg";


const NavBar = () => {
    return ( <React.Fragment>
      <nav className="navbar navbar-dark bg-dark p-2">
        <ul className="navbar nav">
          <img src={logo} alt="" />
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Admin Panel
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/challenges">
              Challenges Page
            </Link>
          </li>
        </ul>
      </nav>
      </React.Fragment> );
}
 
export default NavBar;
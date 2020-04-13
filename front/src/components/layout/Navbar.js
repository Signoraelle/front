import React from "react";
import { Link } from "react-router-dom";
import SingedInlinks from "./SingedInLinks";
import SingedOutlinks from "./SingedOutLinks";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        <SingedInlinks />
        <SingedOutlinks />
      </div>
    </nav>
  );
};

export default NavBar;
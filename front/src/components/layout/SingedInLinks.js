import React from "react";
import { NavLink } from "react-router-dom";

const SingedInlinks = () => {
  return (
    <ul className="right">
      <li>
        {/* <NavLink to="/create">New Project</NavLink> */}
      </li>
      {/* <li>
        <NavLink to="/">Log Out</NavLink>
      </li> */}
      <li>
        <NavLink to="/profile" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SingedInlinks;
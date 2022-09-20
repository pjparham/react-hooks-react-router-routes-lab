import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return(
    <div className="navbar">
      <NavLink style={linkStyles} to="/" exact>Home</NavLink>
      <NavLink style={linkStyles} to="/movies">Movies</NavLink>
      <NavLink style={linkStyles} to="/directors">Directors</NavLink>
      <NavLink style={linkStyles} to="/actors">Actors</NavLink>
    </div>
     );
}

export default NavBar;


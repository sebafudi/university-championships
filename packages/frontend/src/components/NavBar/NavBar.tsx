/* eslint-disable jsx-a11y/anchor-is-valid */
import { HashLink as Link } from "react-router-hash-link";

import "./NavBar.scss";
// import "bulma/css/bulma.min.css";

function NavBar() {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-bg"></div>
      <div id="navbarBasicExample" className="navbar-brand">
        <Link to="/#" className="navbar-item">
          Home
        </Link>
        <Link to="/#live" className="navbar-item">
          Live
        </Link>
        <Link to="/#ladder" className="navbar-item">
          Drabinka
        </Link>
        <Link to="/#teams" className="navbar-item">
          Drużyny
        </Link>
        <Link to="/admin" className="navbar-item">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

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
      <div id="navbarBasicExample" className="navbar-brand">
        <Link to="/#" className="navbar-item">
          Home
        </Link>
        <Link to="/#ladder" className="navbar-item">
          Drabinka
        </Link>
        <Link to="/#teams" className="navbar-item">
          Drużyny
        </Link>
        <Link to="/register" className="navbar-item">
          Zapisy
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

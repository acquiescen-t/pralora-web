import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import logoGreen from "../assets/pralora.png";
import logoWhite from "../assets/pralora-white.png";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center w-100">
        <div className="d-flex align-items-center ps-3" style={{ flex: 1 }}>
          <Sidebar />
          <Link className="navbar-brand navbar-logo-container ps-3" to="/">
            <img src={logoGreen} className="logo logo-green" />
            <img src={logoWhite} className="logo logo-white" />
          </Link>
        </div>

        <div
          className="d-flex justify-content-center text-white"
          style={{ flex: 4 }}
        >
          <p> Search bar goes here </p>
        </div>

        <div
          className="d-flex justify-content-end align-items-center text-white pe-3"
          style={{ flex: 1 }}
        >
          <p> Account and notifications go here</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

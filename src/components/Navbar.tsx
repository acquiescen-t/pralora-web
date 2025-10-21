import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import logoGreen from "../assets/pralora.png";
import logoWhite from "../assets/pralora-white.png";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";

interface Props {
  initialQuery?: string;
}

const Navbar = ({ initialQuery = "" }: Props) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    // To be implemented
    console.log("Searching for " + query);
  };

  return (
    <nav className="navbar fixed-top pt-4">
      <div className="d-flex align-items-center w-100">
        <div className="d-flex align-items-center ps-4" style={{ flex: 1 }}>
          <Sidebar />
          <Link className="navbar-brand navbar-logo-container ms-1" to="/home">
            <img src={logoGreen} className="logo logo-green" />
            <img src={logoWhite} className="logo logo-white" />
          </Link>
        </div>

        <div
          className="d-flex justify-content-center text-white"
          style={{ flex: 4 }}
        >
          <div className="input-group search-bar">
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleSearch()}
            >
              <MagnifyingGlassIcon />
            </button>
            <input
              id="Search"
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div
          className="d-flex justify-content-end align-items-center text-white pe-3 align-bottom"
          style={{ flex: 1 }}
        >
          Account and notifications go here
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

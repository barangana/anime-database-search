import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li>
            <Link to="/">SEIREI LIST</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

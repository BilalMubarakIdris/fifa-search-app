import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/playersDetails">Home</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <div className="header_container">
      <Link className="header_link" to="/">
        Home
      </Link>
      <Link className="header_link" to="/about">
        About
      </Link>
      <Link className="header_link" to="/contact">
        Contact
      </Link>
      <Link className="header_link" to="/product">
        Product
      </Link>
    </div>
  );
}

export default Header;

import React from "react";
import {Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <a></a>
      <nav>
        <ul className="flex just">
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/checkout'>CHECKOUT</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

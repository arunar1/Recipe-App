import React from "react";
import {Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <a></a>
      <nav>
        <ul className="flex just">
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/checkout'>CHECKOUT{props.cart.length>0 ?(<sup style={{padding:'2px',backgroundColor:'red',borderRadius:'50%'}}>{props.cart.length}</sup>) :null}</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

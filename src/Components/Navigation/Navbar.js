import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">HOC example</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter app</NavLink>
        </li>
        <li>
          <NavLink to="/listdata">List data</NavLink>
        </li>
        <li>
          <NavLink to="/searchmeals">Search meals</NavLink>
        </li>
        <li>
          <NavLink to="/customhooks">Custom hooks</NavLink>
        </li>
        <li>
          <NavLink to="/tables">Tables</NavLink>
        </li>
        <li>
          <NavLink to="/use-memo">Use Memo</NavLink>
        </li>
        <li>
          <NavLink to="/use-callbacks">Use Callback</NavLink>
        </li>
        <li>
          <NavLink to="/dropdown-list">Dropdown list</NavLink>
        </li>
        <li>
          <NavLink to="/redux-api">Redux thunk API</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;

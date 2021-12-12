import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          M<span>commerce</span>
        </div>
        <input type="text" className="search" placeholder="Search" />
        <i className="fas fa-search" id="searchIcon"></i>
        <div className="items">
          <ul>
            <li>
              <Link to="#" className= "link">Home</Link>
            </li>
            <li>
              <Link to="#" className= "link">Contact</Link>
            </li>
            <li>
              <Link to="#" className= "link">SignIn</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;

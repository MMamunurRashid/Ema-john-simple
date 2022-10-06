import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header-nav">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shopping</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/logIn">
          Log In <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

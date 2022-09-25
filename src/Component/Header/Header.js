import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header-nav">
      <img src={logo} alt="" />
      <div>
        <a href="/Shopping">Shopping</a>
        <a href="/Orders">Orders</a>
        <a href="/Inventory">Inventory</a>
        <a href="/AboutUs">About Us</a>
        <a href="/LogIn">
          Log In <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
        </a>
      </div>
    </nav>
  );
};

export default Header;

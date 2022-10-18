import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="header-nav">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shopping</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/aboutUs">About Us</Link>
        {user?.uid ? (
          <Link onClick={logOut} to="/logIn">
            Log Out
            <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
          </Link>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/logIn">
              Log In <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

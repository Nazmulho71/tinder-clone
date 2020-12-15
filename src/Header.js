import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Person, Forum, ArrowBackIos } from "@material-ui/icons";
import "./Header.css";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIos fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <Person className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;

import React from "react";
import classes from "./Header.module.css"
import Logo from "../Logo/Logo";
import UserPreview from "../UserPreview/UserPreview";

const Header = () => {
  return (
    <div className={classes.header_item}>
      <Logo />
      <UserPreview />
    </div>
  )
}

export default Header;

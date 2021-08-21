import React from "react";
import classes from "./Header.module.css"
import UserPreview from "../UserPreview/UserPreview";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className={classes.header_item}>
      <Logo />
      <UserPreview name={'Aleksandr S.'} avatar={'https://m.buro247.ru/images/senina/original234567890-.jpg'}/>
    </div>
  )
};

export default Header;

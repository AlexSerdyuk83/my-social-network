import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer_container}>
      <p className={classes.font_name}>create by: <i>Aleksandr Serdyuk</i></p>
    </footer>
  )
};

export default Footer;

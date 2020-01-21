import React from "react";
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <div><hr/></div>
            <div className={classes.year}> © 2018-2019</div>
        </footer>
    )
};

export default Footer;

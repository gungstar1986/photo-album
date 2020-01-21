import React from 'react'
import classes from './Preloader.module.css'
import animation from "../../Img/animation.svg";

const Preloader = () => {
    return (
        <div className={classes.contentContainer}>
            <img className={classes.spinner} src={animation} alt=""/>
        </div>
    )
};

export default Preloader;

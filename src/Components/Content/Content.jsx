import React from "react";
import classes from "./Content.module.css"


const Content = ({images, modal, ...props}) => {

    const findID = (id) => props.getBigImage(id);
    const image = images.map((elem =>
        <div key={elem.id}><img onClick={() => findID(elem.id)} src={elem.url} alt=""/></div>));


    return (
        <div className={classes.contentContainer}>
            <div className={classes.imageContainer}>
                {image}
            </div>
        </div>
    )
};

export default Content;



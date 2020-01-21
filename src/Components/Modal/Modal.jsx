import React from "react";
import classes from "./Modal.module.css";
import closeButton from "../../Img/close.png";
import FormData from "../FormData/FormData";


const Modal = ({modal, ...props}) => {

    const comments = modal.comments.map((item, id) => {
        const date = new Date(item.date).toISOString().slice(0, 10).split("-").reverse().join(".");
        return (
            <div key={id}>
                <div className={classes.date}>{date}</div>
                <div className={classes.comment}>{item.text}</div>
            </div>
        )
    });

    return (
        <div className={classes.modalWindowContainer}>
            <div className={classes.modalWindow}>
                <div><img className={classes.closeWindow} onClick={() => props.clear()} src={closeButton} alt=""/></div>
                <div className={classes.photoArea}><img  src={modal.url} alt=""/></div>
                <div className={classes.commentsArea}>
                    {comments}
                </div>
                <div className={classes.formArea}>
                    <FormData id={modal.id} send={props.send} url={modal.url}/>
                </div>
            </div>
        </div>
    )
};

export default Modal

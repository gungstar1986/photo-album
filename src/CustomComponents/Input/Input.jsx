import React from "react";
import classes from "./Input.module.css"

export const InputName = ({input, meta}) =>
    meta.touched && !input.value
        ? <div className={classes.error}><input  placeholder={meta.error} type="text" {...input}/></div>
        : <div className={classes.noError}><input  placeholder={"Ваше имя"} type="text" {...input}/></div>;

export const InputText = ({input, meta}) =>
    meta.touched && !input.value
        ? <div className={classes.error}><input  placeholder={meta.error} type="text" {...input}/></div>
        : <div className={classes.noError}><input  placeholder={"Ваш комментарий"} type="text" {...input}/></div>;


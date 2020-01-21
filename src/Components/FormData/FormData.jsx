import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../Validators/validators";
import classes from "./FormData.module.css"
import {InputName, InputText} from "../../CustomComponents/Input/Input";


const FormDataReducer = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.fieldContainer}><Field validate={[required]}
                            placeholder={"Ваше имя"}
                            name={'name'}
                            component={InputName}/></div>
                <div className={classes.fieldContainer}><Field validate={[required]}
                            placeholder={"Ваш комментарий"}
                            name={'comment'}
                            component={InputText}/></div>
                <div className={classes.sendButton}>
                    <button>Отправить</button>
                </div>
            </form>
        </div>
    )
};
const FormDataConfig = reduxForm({form: "message"})(FormDataReducer);
const FormData = ({id, url, ...props}) => {
    const onSubmit = (data) => {
        props.send(id, data.name, data.comment, url);
        data.name = "";
        data.comment = "";
    };

    return <FormDataConfig onSubmit={onSubmit}/>
};
export default FormData;

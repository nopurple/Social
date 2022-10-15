import React, {Component} from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItem";
import Messages from "./message/Message";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/required";
import {Textarea} from "../common/FormsControl/FormControl";
import {Navigate} from "react-router-dom";

let maxLength15 = maxLengthCreator(50);
let minLength2 = minLengthCreator(0);

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map(d => <DialogItems name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id}/>);


    let AddNewMessage = (values) => {
        props.onSendMessages(values.newMessageBody);
    };

    if (props.isAuth === false) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
            </div>
            <AddMessagesReduxForm onSubmit={AddNewMessage}/>
        </div>
    );
}

const AddMessagesForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={'Enter your messages'} name={'newMessageBody'} component={Textarea}
                           validate={[required, maxLength15, minLength2]}/>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </Form>
    )
}

const AddMessagesReduxForm = reduxForm({form: 'DialogAddMessagesForm'})(AddMessagesForm)

export default Dialogs;
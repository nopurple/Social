import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormControl";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/required";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Navigate} from "react-router-dom";
import style from "../common/FormsControl/FormControl.module.css"

let maxLength80 = maxLengthCreator(80);
let minLength7 = minLengthCreator(7);


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate={[required, maxLength80, minLength7]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'Password'} component={Input}
                       validate={[required, maxLength80, minLength7]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>}
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);

import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import userimg from './../../assets/images/userlogin.gif'


const Header = (props) => {
    return <header className={s.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/768px-Wikimedia-logo.png"/>
        <div className={s.login_block}>
            { props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'} >Login</NavLink> }
            <img src={userimg} />
        </div>
    </header>
}
export default Header;
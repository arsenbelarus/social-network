import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type headerPropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

function Header (props: headerPropsType) {
    return (
        <header className={s.header}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQie3E0fOUC7Wzjg0m3zZMX44h4RqWOSJqM1cfgO0t2CeE2pmhc&usqp=CAU"}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> { props.login } --- <button onClick={props.logout}> Log out </button> </div>
                : <NavLink to={"/login"}>Login</NavLink>}

        </div>
        </header>
    )
}

export default Header
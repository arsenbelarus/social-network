import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {friendsType} from "../../Redux/state";

type propsType = {
    friends:  friendsType[],
}
function Navbar(props: propsType) {
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink to={"/profile"} activeClassName={s.activeLink}> Profile </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/dialogs"} activeClassName={s.activeLink}> Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/news"} activeClassName={s.activeLink}> News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/music"} activeClassName={s.activeLink}> Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/settings"} activeClassName={s.activeLink}> Settings</NavLink>
                </div>
            </nav>
            <Friends friends = {props.friends}/>
        </div>
    )
}

export default Navbar
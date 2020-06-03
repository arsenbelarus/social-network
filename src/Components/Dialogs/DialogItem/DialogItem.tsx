import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItem = {
    name: string,
    id: number
}

function DialogItem(props: DialogItem) {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src={"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}/>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem
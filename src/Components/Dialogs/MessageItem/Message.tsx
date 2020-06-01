import React from 'react';
import s from './Message.module.css';
import {NavLink} from "react-router-dom";
type propsMessage = {
    message: string
}

function Message(props: propsMessage) {
    return (
            <div className={s.message}>
                {props.message}
            </div>
    )
}

export default Message
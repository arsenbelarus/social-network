import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";

let dialogsData = [
    {id: 1, name: "Arsen"},
    {id: 2, name: "Olya"},
    {id: 3, name: "Tigran"},
    {id: 4, name: "David"},
]

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Hello world"},
    {id: 4, message: "Lorem ipsum"},
]


function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={s.messages}>
              <Message message={messagesData[0].message}/>
              <Message message={messagesData[1].message}/>
              <Message message={messagesData[2].message}/>
              <Message message={messagesData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs
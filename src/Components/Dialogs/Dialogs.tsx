import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";

type propsType = {
    messages: any,
}

function Dialogs(props: propsType) {
    let dialogElements = props.messages.dialogsData.map((d: { name: string; id: number; }) => <DialogItem name={d.name}
                                                                                                          id={d.id}/>)
    let messageElementsLeft = props.messages.messagesDataLeft.map((m: { message: string; }) => <Message message={m.message}/>)
    let messageElementsRight = props.messages.messagesDataRight.map((m: { message: string; }) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesRow}>
                    <div className={s.messagesCell1}>
                        {messageElementsLeft}
                    </div>
                    <div className={s.messagesCell2}>
                        {messageElementsRight}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
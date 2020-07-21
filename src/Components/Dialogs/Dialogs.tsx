import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";
import {messagesPageType} from "../../Redux/Types";
import {AddMessageReduxForm} from "./AddMessageForm";

type propsType = {
    messages: messagesPageType,
    newMessageText: string,
    updateNewMessageText: (newMessage: string) => void,
    addMessage: (newMessageBody: string) => void,
}

function Dialogs(props: propsType) {
    let dialogElements = props.messages.dialogsData.map((d: { name: string; id: number; }) => <DialogItem name={d.name}
                                                                                                          id={d.id} key={d.id}/>)
    let messageElementsLeft = props.messages.messagesDataLeft.map((m: { message: string; }) => <Message message={m.message}/>)
    let messageElementsRight = props.messages.messagesDataRight.map((m: { message: string; }) => <Message message={m.message}/>)

    const addMessage = (newMessageBody: string) => {
        props.addMessage(newMessageBody)
    }

    const onSubmit = (values: any) => {
        addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesRow}>
                    <div className={s.messagesCell1}>
                        {messageElementsLeft}
                        <AddMessageReduxForm onSubmit={onSubmit}/>
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
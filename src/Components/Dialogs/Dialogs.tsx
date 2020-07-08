import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../Redux/messageReducer";
import {messagesPageType} from "../../Redux/state";

type propsType = {
    messages: messagesPageType,
    newMessageText: string,
    updateNewMessageText: (newMessage: string) => void,
    addMessage: () => void,
}

function Dialogs(props: propsType) {
    let dialogElements = props.messages.dialogsData.map((d: { name: string; id: number; }) => <DialogItem name={d.name}
                                                                                                          id={d.id} key={d.id}/>)
    let messageElementsLeft = props.messages.messagesDataLeft.map((m: { message: string; }) => <Message message={m.message}/>)
    let messageElementsRight = props.messages.messagesDataRight.map((m: { message: string; }) => <Message message={m.message}/>)

    let newMessageBody = props.newMessageText

    const addMessage = () => {
        props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.target.value;
        if (newMessage) {
            props.updateNewMessageText(newMessage)
        }
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
                        <div>
                            <textarea value={newMessageBody} onChange={onChangeHandler}/>
                        </div>
                        <div>
                            <button onClick={addMessage}> Add message </button>
                        </div>
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
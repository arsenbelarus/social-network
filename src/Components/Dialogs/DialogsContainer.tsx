import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../Redux/messageReducer";
import {messagesPageType} from "../../Redux/state";
import Dialogs from "./Dialogs";

type propsType = {
    messages: messagesPageType,
    dispatch: (action: any) => void,
    newMessageText: string,
}

function DialogsContainer(props: propsType) {

    const addMessage = () => {
        props.dispatch ( addMessageActionCreator() )
    }
    const onChangeHandler = (newMessage: string) => {
        if (newMessage) {
            props.dispatch (updateNewMessageTextActionCreator(newMessage))
        }
    }

    return (<Dialogs updateNewMessageText={onChangeHandler} addMessage={addMessage}
                     messages={props.messages} newMessageText={props.newMessageText}/>)
}

export default DialogsContainer
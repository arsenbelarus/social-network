import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../Redux/messageReducer";
import { _stateType} from "../../Redux/Types";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: _stateType) => {
    return {
        messages: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth,
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (newMessage: string) => {
            if (newMessage) {
                dispatch (updateNewMessageTextActionCreator(newMessage))
            }
        },
        addMessage: () => {
            dispatch ( addMessageActionCreator() )
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer
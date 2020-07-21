import React from 'react';
import {addMessageActionCreator} from "../../Redux/messageReducer";
import { _stateType} from "../../Redux/Types";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: _stateType) => {
    return {
        messages: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch ( addMessageActionCreator(newMessageBody) )
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
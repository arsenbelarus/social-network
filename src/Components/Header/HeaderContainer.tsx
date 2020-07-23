import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { logout } from "../../Redux/authReducer";
import {_stateType} from "../../Redux/Types";

class HeaderContainer extends React.Component<any, any> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
    }
}

const mapsStateToProps = (state: _stateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapsStateToProps, {logout})(HeaderContainer)
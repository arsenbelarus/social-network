import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuth, logout, setUserData} from "../../Redux/authReducer";
import {_stateType, authType} from "../../Redux/Types";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.checkAuth()
    }

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

export default connect(mapsStateToProps, {setUserData, checkAuth, logout})(HeaderContainer)
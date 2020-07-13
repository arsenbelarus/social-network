import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/authReducer";
import {_stateType, authType} from "../../Redux/Types";
import {userApi} from "../../API/api";

class HeaderContainer extends React.Component<any, any>{

    componentDidMount() {
        userApi.checkAuth().then(data => {
            if (data.resultCode === 0) {
                this.props.setUserData (data.data)
            }
        });
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapsStateToProps = (state: _stateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect (mapsStateToProps, {setUserData}) (HeaderContainer)
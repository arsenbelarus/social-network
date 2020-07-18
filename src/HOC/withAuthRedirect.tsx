import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {_stateType} from "../Redux/Types";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: _stateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if(!this.props.isAuth) {return <Redirect to={"/login"}/>};
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
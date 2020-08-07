import React from 'react';
import s from './App.module.css';
import Navbar from "./Components/Navbar/Navbar";
import {_stateType} from './Redux/Types';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initialiseApp} from "./Redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import MainBlock from "./MainBlock";


class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader/>
        }
        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <MainBlock/>
                <FriendsContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state: _stateType) => ({
    initialised: state.app.initialised
})

export default connect(mapStateToProps, {initialiseApp})(App);
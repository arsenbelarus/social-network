import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {_stateType} from './Redux/Types';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Friends from "./Components/Friends/Friends";
import {connect} from "react-redux";
import {initialiseApp} from "./Redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";


class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if(!this.props.initialised){
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className={"app-wrapper"}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/news' render={() => <Music/>}/>
                        <Route path='/music' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                    <div style={{gridArea: "r", backgroundColor: "black"}}>
                        <Friends friends={this.props.stateForFriends}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: _stateType) => ({
    stateForFriends: state.friends,
    initialised: state.app.initialised
})

export default connect(mapStateToProps, {initialiseApp})(App);
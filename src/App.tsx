import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {friendsType} from './Redux/Types';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

type propsType = {
    stateForFriends: friendsType[],
}


function App(props: propsType) {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar friends = {props.stateForFriends}/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' render={() => <Music />}/>
                    <Route path='/music' render={() => <News />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/users' render={() => <UsersContainer /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
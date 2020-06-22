import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import { storeType } from './Redux/state';

type propsType = {
    state: storeType,
    dispatch: (action: any) => void,
}


function App(props: propsType) {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar friends = {props.state._state.friends}/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile' render={() => <Profile posts = { props.state._state.profilePage.postsData }
                                                                  newPostText = {props.state._state.profilePage.newPostText}
                                                                  dispatch = {props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs messages = {props.state._state.messagesPage}
                                                                  newMessageText = {props.state._state.messagesPage.newMessageText}
                                                                  dispatch = {props.dispatch}/>}/>
                    <Route path='/news' render={() => <Music />}/>
                    <Route path='/music' render={() => <News />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
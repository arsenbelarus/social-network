import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {_stateType} from './Redux/Types';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initialiseApp} from "./Redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import FriendsContainer from "./Components/Friends/FriendsContainer";
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))


class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader/>
        }
        return (

            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div> 404 NOT FOUND</div> }/>

                    </Switch>

                </div>
                <div style={{gridArea: "r", backgroundColor: "black"}}>
                    <FriendsContainer/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: _stateType) => ({
    initialised: state.app.initialised
})

export default connect(mapStateToProps, {initialiseApp})(App);
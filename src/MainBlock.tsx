import React from "react";
import s from './App.module.css';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {Route, Switch, Redirect} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import Login from "./Components/Login/Login";
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))


type MainBlockTypes = {

}

const MainBlock = (props: MainBlockTypes) => {

    return (

        <div className={s.appWrapperContent}>
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

    )

}


export default MainBlock
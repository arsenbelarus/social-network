import React from 'react';
import s from './Friends.module.css';
import {friendsType} from "../../Redux/Types";
import avatarLogo from "../../Assets/Images/avatar.jpg"
import {NavLink} from "react-router-dom";

type propsType = {
    friends: friendsType[],
}

function Friends(props: propsType) {

    let friendsElements = props.friends.map((f, index) =>
        <div className={s.friend} key={index}>
            <NavLink to={"/profile/" + f.id}>
                <img src={f.photos.small ? f.photos.small : avatarLogo} alt={""}/>
            </NavLink>
            <div className={s.friendName}>
                {f.name}
            </div>
        </div>
    )

    return (
        <div>

            <h2>Friends</h2>

            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends
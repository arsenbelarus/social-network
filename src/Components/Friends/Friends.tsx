import React from 'react';
import s from './Friends.module.css';
import {friendsType} from "../../Redux/Types";

type propsType = {
    friends:  friendsType[],
}
function Friends(props: propsType) {

    let friendsElements = props.friends.map((f: { name: string; imgSource: string; }, index) =>
        <div className={s.friend} key={index}>
            <img src={f.imgSource} alt={""}/>
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
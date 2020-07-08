import React from "react"
import s from "./Users.module.css"
import {usersType} from "../../Redux/state";
import axios from 'axios'
import avatarLogo from "../../Assets/Images/avatar.jpg"

type propsType = {
    users: usersType[],
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
    setUsers: (users: usersType[]) => void,
}

const Users = (props: propsType) => {

    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small ? u.photos.small : avatarLogo} className={s.usersPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users
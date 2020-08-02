import React from "react"
import s from "./Users.module.css"
import {usersType} from "../../Redux/Types";
import avatarLogo from "../../Assets/Images/avatar.jpg"
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

type UsersPropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    users: Array<usersType>;
    unFollow: (id: number) => void;
    follow: (id: number) => void;
    onPaginationClickHandler: (p: number) => void;
    isFollowStatusChanging: Array<number>;
    toggleIsFollowStatusChanging: (isFollowStatusChanging: boolean, userId: number) => void
}

const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPaginationClickHandler={props.onPaginationClickHandler}/>
            {
                props.users.map((u: usersType) =>
                    <div key={u.id} className={s.userContainer}>
                        <div className={s.imageAndButtonContainer}>
                            <div>
                                <NavLink to={"/profile/" + u.id}>
                                    <img src={u.photos.small ? u.photos.small : avatarLogo} className={s.usersPhoto}/>
                                </NavLink>
                            </div>
                            <div className={s.button}>
                                {u.followed
                                    ? <button disabled={props.isFollowStatusChanging.some(id => id === u.id)} onClick={() => props.unFollow(u.id)}>UnFollow</button>
                                    : <button disabled={props.isFollowStatusChanging.some(id => id === u.id)} onClick={() => props.follow(u.id)}>Follow</button>}
                            </div>
                        </div>
                        <span className={s.userInformation}>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users
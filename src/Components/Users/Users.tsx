import React from "react"
import s from "./Users.module.css"
import {usersType} from "../../Redux/state";
import avatarLogo from "../../Assets/Images/avatar.jpg"

type UsersPropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    users: Array<usersType>;
    unFollow: (id: number) => void;
    follow: (id: number) => void;
    onPaginationClickHandler: (p: number) => void;
}

const Users = (props: UsersPropsType) => {

    let pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }

    return (
    <div>
        <div>
            {pages.map(p =>
                <span className={(props.currentPage === p) && s.selectedPage} style={{cursor: "pointer"}}
                      onClick={() => {
                          props.onPaginationClickHandler(p)
                      }}> {p} </span>
            )}
        </div>
        {
            props.users.map((u: usersType) =>
                <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small ? u.photos.small : avatarLogo} className={s.usersPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unFollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
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
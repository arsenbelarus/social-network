import React, {ChangeEvent, useEffect, useState} from "react";
import {profileType} from "../../../Redux/Types";
import s from './ProfileInfo.module.css';
import {TextField} from "@material-ui/core";

type propsType = {
    profile: profileType,
    status: string,
    update: (status: string) => void,
    isOwner: boolean
}

const ProfileStatusWithHooks = (props: propsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if(props.isOwner) {
            setEditMode(true)
        }
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.update(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    return (
        <>
            {!editMode &&
            <div className={s.description}>
                <span onDoubleClick={activateEditMode}><strong>Status: </strong>{props.status}</span>
            </div>
            }
            {editMode &&
            <div className={s.description}>
                <TextField variant={"outlined"} type="text" value={status}
                           onChange={onStatusChange} onBlur={activateViewMode} autoFocus={true} />
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks
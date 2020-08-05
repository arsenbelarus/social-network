import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {profileType} from "../../../Redux/Types";
import avatarLogo from "../../../Assets/Images/avatar.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWtihHooks";
import ProfileData from "./ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataForm";


type propsType = {
    profile: profileType,
    status: string,
    update: (status: string) => void,
    isOwner: boolean,
    savePhoto: (e: File) => void,
    updateProfileData: (profile: profileType) => Promise<any>,
}

const ProfileInfo: React.FC<propsType> = ({profile, status, update, isOwner, savePhoto, updateProfileData}) => {

    const photoUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            savePhoto(e.target.files[0])
        }
    }

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (formData: profileType) => {
        updateProfileData(formData).then(
            () => setEditMode(false)
        )
    }

    return (

        <div>
            {profile &&
            <div>
                <div className={s.description}>
                    <img src={profile.photos.large || avatarLogo} alt="large avatar"/>
                    {isOwner && <input type={"file"} onChange={photoUploadHandler}/>}
                </div>
                {
                    editMode
                        ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit}
                                                profile={profile}/>
                        : <ProfileData isOwner={isOwner}
                                       profile={profile}
                                       activateEditMode={() => setEditMode(true)}/>
                }
                <ProfileStatusWithHooks profile={profile} status={status}
                                        update={update} isOwner={isOwner}/>
            </div>
            }

        </div>
    )
}

export default ProfileInfo
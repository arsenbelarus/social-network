import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "../../Redux/Types";

type propsType = {
    profile: profileType,
    status: string,
    update: (status: string) => void,
    isOwner: boolean,
    savePhoto: (e: File) => void,
    updateProfileData: (profile: profileType) => Promise<any>,
}

function Profile(props: propsType) {

    return (
        <div >
            <ProfileInfo profile={props.profile} status={props.status} update={props.update}
                         isOwner={props.isOwner} savePhoto={props.savePhoto} updateProfileData={props.updateProfileData}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
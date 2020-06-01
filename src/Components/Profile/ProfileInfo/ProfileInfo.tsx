import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div className={s.profileImage}>
                <img src="https://www.colbeck.co.uk/wp-content/uploads/2018/09/sunset-banner.jpg" alt="banner"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
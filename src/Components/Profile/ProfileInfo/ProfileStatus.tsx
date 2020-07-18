import React from "react";
import {profileType} from "../../../Redux/Types";
import s from './ProfileInfo.module.css';

type propsType = {
    profile: profileType
}

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    activateViewMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={s.description}>
                        <span onDoubleClick={this.activateEditMode}>{`My status ${this.props.profile.aboutMe}`}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.description}>
                        <input type="text" value={`My status ${this.props.profile.aboutMe}`}
                               autoFocus={true} onBlur={this.activateViewMode}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus
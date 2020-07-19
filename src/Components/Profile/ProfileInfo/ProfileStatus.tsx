import React, {ChangeEvent} from "react";
import {profileType} from "../../../Redux/Types";
import s from './ProfileInfo.module.css';
import {TextField} from "@material-ui/core";

type propsType = {
    profile: profileType,
    status: string,
    update: (status: string) => void,
}

class ProfileStatus extends React.Component<propsType> {

    state = {
        editMode: false,
        status: this.props.status,
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    activateViewMode = () => {
        this.setState({editMode: false})

        this.props.update(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<{editMode: boolean, status: string}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={s.description}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.description}>
                        <TextField variant={"outlined"} type="text" value={this.state.status} onChange={this.onStatusChange}
                               autoFocus={true} onBlur={this.activateViewMode}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus
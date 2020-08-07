import React from "react";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import Friends from "./Friends";
import {getFriends} from "../../Redux/friendsReducer";


class FriendsContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return (
            <div style={{gridArea: "r", backgroundColor: "black"}}>
                <Friends friends={this.props.friends}/>
            </div>
        )

    }
}

const mapStateToProps = (state: _stateType) => {
    return {
        friends: state.friendsPage.friends,
    }
}

export default connect (mapStateToProps, {getFriends})(React.memo(FriendsContainer))

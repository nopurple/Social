import React from "react";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, savePhoto, updateStatus} from "../../Redux/profileReducer";
import {WithAuthNavigate, withRouter,} from "../../hoc/WithAuthRedirect";
import Profile from "./Profile";
import {compose} from "redux";
import {Navigate} from "react-router-dom";


class ProfileContainer extends React.Component {

    refresherProfile() {
        let userId = this.props.router.userId;
        if (!userId) {
            userId = 25821;
        }

        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refresherProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.userId != prevProps.router.userId) {
            this.refresherProfile();

        }
    }

    render() {
        if (this.props.isAuth === false) return <Navigate to={'/login'}/>
        return (
            <Profile {...this.props}
                     isOwner={!this.props.router.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus,savePhoto}),
    withRouter,
    WithAuthNavigate
)(ProfileContainer)


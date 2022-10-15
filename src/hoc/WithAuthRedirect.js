import React from "react";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth
});

export const WithAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            const isAuthUser = async () => {
                await this.props.isAuth


                if (!this.props.isAuth) {
                    return <Navigate to='/login' />
                }
            }

            //isAuthUser()

            return <Component {...this.props} />
        }
    }

    let ConnectAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);

    return ConnectAuthNavigateComponent;
}

export const withRouter = (Component) => {
    let ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}
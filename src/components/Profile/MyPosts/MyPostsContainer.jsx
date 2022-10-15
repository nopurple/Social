import React from "react";
import {addPostActionCreater} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPostText) => {
            dispatch(addPostActionCreater(newPostText));
        },
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts) ;

export default MyPostsContainer;
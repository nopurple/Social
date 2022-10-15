import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/required";
import {Textarea} from "../../common/FormsControl/FormControl";


let maxLength100 = maxLengthCreator(100);
let minLength2 = minLengthCreator(2);

const AddMyPostsForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your text post'} name={'newPostText'} component={Textarea}
                       validate={[required, maxLength100, minLength2]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </Form>

    )
}

const AddMyPostReduxForm = reduxForm({form: 'AddMyPostsForm'})(AddMyPostsForm)


const MyPosts = React.memo(props => {

    console.log("render")

    let postElements = props.posts.map(p => <Post like={p.likeCount} message={p.message}/>)

    let AddMyPosts = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <AddMyPostReduxForm onSubmit={AddMyPosts}/>
            </div>
            <div className={s.Posts}>
                {postElements}
            </div>
        </div>
    )
});

export default MyPosts;
import profileReducer, {addPostActionCreater, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hello its my first page', likeCount: 12},
        {id: 2, message: 'My name is Vladimir', likeCount: 22},
    ],
}

test('length of posts should be increment', () => {

    let action = addPostActionCreater('Hello man i am noga')

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    //test data
    let action = addPostActionCreater('Hello man i am noga')

    //action
    let newState = profileReducer(state, action);

    //expected
    expect(newState.posts[2].message).toBe('Hello man i am noga')
});

test('length of posts should be decriment', () => {
    //test data
    let action = deletePost(1)

    //action
    let newState = profileReducer(state, action);

    //expected
    expect(newState.posts.length).toBe(1)
});

test('length of posts shouldn`t be decriment if id is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2)
});
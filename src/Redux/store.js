
/*let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello its my first page', likeCount: 12},
                {id: 2, message: 'My name is Vladimir', likeCount: 22},
            ],
            newPostText: 'Hello enter new post'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Chika'},
                {id: 2, name: 'Adelina'},
                {id: 3, name: 'Marat'}
            ],
            messages: [
                {id: 1, message: 'Hello i love u my wife'},
                {id: 2, message: 'Hey i love u too my husband'},
                {id: 3, message: 'Hello its me Marat'}
            ],

        },
        sideBar: []
    },
    _callSubscriber() {
        console.log('hello')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

 */


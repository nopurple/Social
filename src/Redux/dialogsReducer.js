const ADD_MESSAGE_BODY = 'dialogs/ADD-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Chika'},
        {id: 2, name: 'Adelina'},
        {id: 3, name: 'Marat'},
        {id: 4, name: 'Luffy'},
        {id: 5, name: 'Sabo'},
    ],
    messages: [
        {id: 1, message: 'Hello i love u my wife'},
        {id: 2, message: 'Hey i love u too my husband'},
        {id: 3, message: 'Hello its me Marat'}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_BODY:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}
export const sendMessageCreater = (newMessageBody) => ({type: ADD_MESSAGE_BODY, newMessageBody});
export default dialogsReducer;
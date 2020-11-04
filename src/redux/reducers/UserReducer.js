import { GET_USERS } from '../actions/ActionTypes';

const initialState = {
    
        "data": [
            {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            }
        ],
        "ad": {
            "company": "StatusCode Weekly",
            "url": "http://statuscode.org/",
            "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
        }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                data: action.payload.data,
            }
        default:
            return state;
    }
}
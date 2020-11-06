import { GET_USERS } from '../actions/ActionTypes';

const initialState = {
    
        "page": 1,
        "per_page": 6,
        "total": 100,
        "total_pages": 17,
        "data": [
            
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
                data:[...action.payload],
            }
        default:
            return state;
    }
}
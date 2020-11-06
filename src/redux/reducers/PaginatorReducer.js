import { SET_ACTIVE_PAGE, GET_ACTIVE_PAGE } from '../actions/ActionTypes';

const initialState = {
    "current_page": 1,
}

export default function(state = initialState, action) {
   
    switch(action.type) {
        
        case SET_ACTIVE_PAGE:
            
            return {
                ...state,
                "current_page": action.payload,
            }
        case GET_ACTIVE_PAGE:
            
            return {
               ...state
            }
        default:
            return state;
    }
}
import { ADD_TODO, GET_TODO, DELETE_TODO } from '../actions/ActionTypes';

const initialState = {
    notes: ["Some notes", "Sample note one"]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                notes:[...state.notes,action.payload.title]
            }

        case GET_TODO: 
            return {
                notes: state.notes
            }

        case DELETE_TODO:
            const title = action.payload.title;
            state.notes = state.notes.filter((note) => {
                return note !== title
            })
            return {
                notes: state.notes
            }
        
        default:
            return state;
    }
}
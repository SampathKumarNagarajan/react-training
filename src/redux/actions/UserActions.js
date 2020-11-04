import { GET_USERS } from './ActionTypes.js';

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users 
    }
}

export const fetchUsers = () => {
    return dispatch => {
        fetch('https://reqres.in/api/users?page=1')
        .then(res => res.json())
        .then(res => {
            dispatch(getUsers(res))
        })
    }
}

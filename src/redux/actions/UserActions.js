import { GET_USERS } from './ActionTypes.js';

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users 
    }
}

export const fetchUsers = (page) => {
   
    console.log(`https://5fa3e015f10026001618e16c.mockapi.io/api/users?${page}`)
    return (dispatch) => {
        fetch(`https://5fa3e015f10026001618e16c.mockapi.io/api/users?page=${page}&limit=6`)
        .then(res => res.json())
        .then(res => {
            dispatch(getUsers(res))
        })
    }
}

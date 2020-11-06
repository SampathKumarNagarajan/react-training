import { SET_ACTIVE_PAGE, GET_ACTIVE_PAGE } from './ActionTypes.js';

export const setActivePage = (pageNo) => {
   console.log(pageNo)
    return {
        type: SET_ACTIVE_PAGE,
        payload: pageNo 
    }
}

export const getActivePage = () => {
    return {
        type: GET_ACTIVE_PAGE,
    }
}

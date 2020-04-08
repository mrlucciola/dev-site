import {CURRENT_PROJECT} from '../types/projectTypes';

export const updateCurrentProject = (payload) => dispatch => {
    dispatch({
        type: CURRENT_PROJECT,
        payload,
    })
}
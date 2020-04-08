// types
import {CURRENT_PROJECT} from '../types/projectTypes';
// initial state
const initialState = {currentProject: {}}
// main
export default function ProjectReducer(state=initialState, action) {
    switch(action['type']) {
        case TYPE:
            return {...state, update: action['payload']}
        default: return {...state}
    }
}
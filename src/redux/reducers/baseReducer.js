// modules
import {combineReducers} from 'redux';
// redux
import ProjectReducer from './projectReducer';

// main
const BaseReducer = (state = {}, action) => {
    switch(action.type) {
        default: return {...state};
    }
}

// main
export default combineReducers({
    base: BaseReducer,
    project: ProjectReducer,
})
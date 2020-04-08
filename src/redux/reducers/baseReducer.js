// modules
import {combineReducers} from 'redux';
// redux
// import WindowReducer from './WindowReducer';

// main
const BaseReducer = (state = {}, action) => {
    switch(action.type) {
        default: return {...state};
    }
}

// main
export default combineReducers({
    base: BaseReducer,
    // window: WindowReducer,
})
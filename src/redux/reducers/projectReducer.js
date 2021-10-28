// types
import * as types from "../types/projectTypes";
// initial state
const initialState = {
  currentProject: {},
  projectObjArr: [],
};

// main
export default function ProjectReducer(state = initialState, action) {
  switch (action["type"]) {
    case types.CURRENT_PROJECT:
      return { ...state, currentProject: action["payload"] };
    case types.UPDATE_PROJECT_OBJ_ARR:
      return { ...state, projectObjArr: action["payload"] };
    default:
      return { ...state };
  }
}

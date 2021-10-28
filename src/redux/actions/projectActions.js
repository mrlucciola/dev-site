import * as types from "../types/projectTypes";

export const updateCurrentProject = payload => dispatch => {
  dispatch({
    type: types.CURRENT_PROJECT,
    payload,
  });
};

export const updateProjectObjArr = payload => dispatch => {
  dispatch({
    type: types.UPDATE_PROJECT_OBJ_ARR,
    payload,
  });
};

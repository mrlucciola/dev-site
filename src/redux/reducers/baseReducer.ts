// modules
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction, combineReducers } from "redux";
import { AppDispatch, RootState } from "../store";
// redux
import ProjectReducer from "./projectReducer";

// main
const BaseReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// main
export default combineReducers({
  base: BaseReducer,
  project: ProjectReducer,
});

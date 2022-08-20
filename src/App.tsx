// react
import { FC, useEffect } from "react";
// redux
import { updateProjectObjArr } from "./redux/actions/projectActions";
// components
import Body from "./components/body";
import Nav from "./components/Nav";
// constants
import { projectObjectsArr } from "./projectObjectsArr";
import { useAppDispatch } from "./redux/reducers/baseReducer";

/**
 * main
 */
const App: FC = () => {
  // init hooks
  const dispatch = useAppDispatch();
  // effects
  useEffect(() => {
    // update
    console.log("projectObjectsArr", projectObjectsArr);
    // dispatch(updateProjectObjArr(projectObjectsArr));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Body />
    </div>
  );
};

export default App;

// react
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// redux
import { updateProjectObjArr } from './redux/actions/projectActions';
// components
import Body from './components/body/Body';
import Nav from './components/Nav';
// constants
import { projectObjectsArr } from './projectObjectsArr';

/**
 * main
 */
const App = () => {
  // init hooks
  const dispatch = useDispatch();
  // effects
  useEffect(() => {
    // update
    console.log('projectObjectsArr', projectObjectsArr)
    dispatch(updateProjectObjArr(projectObjectsArr))
  }, [])
  return (
    <div className="App">
      <Nav />
      <Body />
    </div>
  );
}

export default App;

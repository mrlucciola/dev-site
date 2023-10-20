// react
import { FC, useEffect } from "react";
// style
// state
// components
import Body from "./components/body";
import Nav from "./components/Nav";
import { useAppContext } from "./mobx/context";
import { MainStore } from "./mobx/stores/main";
import { Project } from "./mobx/types";
const projectsArr: Project[] = [];

/**
 * main
 */
const App: FC = () => {
  // state
  const setProjects: MainStore["setProjects"] = useAppContext(
    (s) => s.main.setProjects
  );

  // effects
  useEffect(() => {
    setProjects(projectsArr);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Body />
    </div>
  );
};

export default App;

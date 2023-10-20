// react
import { observer } from "mobx-react-lite";
import { FC } from "react";
// style
// state
import { useAppContext } from "../../../mobx/context";
import "./ProjectDescription.css";

interface Props {
  projectIdx: number;
}
// main
const ProjectDescription: FC<Props> = ({ projectIdx }) => {
  const description: string = useAppContext(
    (s) => s.main.projects[projectIdx].description
  );
  // TODO: add mui

  return (
    <div className="ProjectDescription">
      <div className="text">{description && description}</div>
    </div>
  );
};
export default observer(ProjectDescription);

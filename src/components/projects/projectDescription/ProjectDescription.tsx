// App > Main > Body > Project > ProjectDescription
// react
import { FC } from "react";
// style
import "./ProjectDescription.css";

interface Props {
  description: any;
}
// main
const ProjectDescription: FC<Props> = ({ description }) => {
  return (
    <div className="ProjectDescription">
      <div className="text">{description && description}</div>
    </div>
  );
};
export default ProjectDescription;

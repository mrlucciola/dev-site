// react
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../mobx/context";
import { Img, Project, Url } from "../../../mobx/types";
// style
import "./ProjectPreview.css";

interface Props {
  // imgURL: any;
  // siteURL: any;
  projectIdx: number;
}
// main
const ProjectPreview: FC<Props> = ({ projectIdx }) => {
  const { img, site }: Project = useAppContext(
    (s) => s.main.projects[projectIdx]
  );
  const buildImgElem = (img: Img, site?: Url) => {
    if (typeof img !== typeof "") {
      return (
        <div className="imgContainer">
          {/* <img src={_imgURL.default} alt="" className="preview-img" /> */}
        </div>
      );
    }
    return (
      <div className="imgContainer">
        {/* <a target="imgLink" rel="noopener noreferrer" href={site}> */}
        {/* <img src={img} alt="" className="preview-img" /> */}
        {/* </a> */}
      </div>
    );
  };
  // TODO: add mui

  return <div className="ProjectPreview">
    {/* add image avatar here */}
  </div>;
};

export default observer(ProjectPreview);

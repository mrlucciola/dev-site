// react
import { FC } from "react";
// style
import "./ProjectPreview.css";

interface Props {
  imgURL: any;
  siteURL: any;
}
// main
const ProjectPreview: FC<Props> = ({ imgURL, siteURL }) => {
  const buildImgElem = (_imgURL: any, siteURL: any) => {
    if (typeof _imgURL !== typeof "") {
      return (
        <div className="imgContainer">
          <img src={_imgURL.default} alt="" className="preview-img" />
        </div>
      );
    }
    return (
      <div className="imgContainer">
        {/* <a target="imgLink" rel="noopener noreferrer" href={siteURL}> */}
        <img src={_imgURL} alt="" className="preview-img" />
        {/* </a> */}
      </div>
    );
  };
  return (
    <div className="ProjectPreview">
      {imgURL && buildImgElem(imgURL, siteURL)}
    </div>
  );
};

export default ProjectPreview;

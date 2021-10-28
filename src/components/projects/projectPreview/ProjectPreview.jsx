// react
import React from "react";
// style
import "./ProjectPreview.css";

// main
const ProjectPreview = ({ imgURL, siteURL }) => {
  const buildImgElem = (_imgURL, siteURL) => {
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
}

export default ProjectPreview;
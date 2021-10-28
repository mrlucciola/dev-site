// App > Main > Body > Project > ProjectPreview
// react
import React from 'react';
// style
import './ProjectPreview.css';

// main
export default function ProjectPreview({imgURL, siteURL}){
    const buildImgElem = (imgURL, siteURL) => {
        return (
            <div className="imgContainer" >
                {/* <a target="imgLink" rel="noopener noreferrer" href={siteURL}> */}
                <img src={imgURL} alt="" className="preview-img"/>
                {/* </a> */}
            </div>
        )
    }
    return(
        <div className="ProjectPreview">
            {imgURL && buildImgElem(imgURL, siteURL)}
        </div>
    )
}
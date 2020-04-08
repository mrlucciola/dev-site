// App > Main > Body > Project > ProjectPreview
// react
import React from 'react';
// style
import './ProjectPreview.css';

// main
export default function ProjectPreview({imgURL, siteURL}){
    const buildImgElem = () => {

        return (
            <a target="_blank" rel="noopener noreferrer" href={siteURL}><img src={imgURL} alt="" className="preview-img"/></a>
        )
    }
    return(
        <div className="ProjectPreview">
            {imgURL && buildImgElem()}
        </div>
    )
}
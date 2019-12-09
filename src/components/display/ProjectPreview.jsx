// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectPreview.jsx

// react
import React from 'react';

export default function ProjectPreview({imgURL, siteURL}){
    // destructuring

    const showProperty = (projectObj, param) => {
        if (projectObj) {
            return projectObj[param]
        } else {
            return 'nothing'
        }
    }
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
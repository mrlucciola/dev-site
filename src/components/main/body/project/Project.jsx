// react
import React from 'react';
// style
import './Project.css';

// main
export default function Project({projectObj}){
    console.log('po', projectObj)
    // destructure
    const {title, repoURL, siteURL, description, stackObj, imgURL} = projectObj;

    return(
        <div className="Project">
        </div>
    )
}
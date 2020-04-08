// App > Main > Body > Project
// react
import React from 'react';
// components
import ProjectNav from './projectNav/ProjectNav';
// style
import './Project.css';

// main
export default function Project({projectObj}){
    console.log('po', projectObj)
    // destructure
    const {title, repoURL, siteURL, description, stackObj, imgURL} = projectObj;

    return(
        <div className="Project">
            <ProjectNav projectObj={projectObj} />
        </div>
    )
}
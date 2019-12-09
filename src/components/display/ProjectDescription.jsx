// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectDescription.jsx

// react
import React from 'react';

export default function ProjectDescription({projectObj}){
    // destructuring
    if (projectObj){
        let {title, repoURL, siteURL, stackObj} = projectObj;
    } else {
        let title, repoURL, siteURL, stackObj;
        title = 0;
    }

    const showProperty = (projectObj, param) => {
        if (projectObj) {
            return projectObj[param]
        } else {
            return 'nothing'
        }
    }

    return(
        <div className="ProjectDescription">
            <div className="title"></div>
        </div>
    )
}
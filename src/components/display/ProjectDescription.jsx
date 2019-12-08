// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectDescription.jsx

// react
import React from 'react';

export default function ProjectDescription({projectObj}){
    // destructuring
    const {title, repoURL, siteURL, stackObj} = projectObj;

    return(
        <div className="ProjectDescription">
            <div className="title"></div>
        </div>
    )
}
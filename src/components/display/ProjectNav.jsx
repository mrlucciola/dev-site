// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectNav.jsx

// react
import React from 'react';

export default function ProjectNav({projectObj}){
    // destructuring
    let {title, repoURL, siteURL, stackObj} = projectObj;

    const showProperty = (projectObj, param) => {
        if (projectObj) {
            return projectObj[param]
        } else {
            return 'nothing'
        }
    }

    return(
        <div className="ProjectNav">
            <div className="title">{showProperty(projectObj, 'title')}</div>
            <div className="urls">
                <a className="repoURL" href={showProperty(projectObj, 'repoURL')}>GitHub Repo</a>
                <a className="siteURL" href={showProperty(projectObj, 'siteURL')}>Website</a>
            </div>
        </div>
    )
}
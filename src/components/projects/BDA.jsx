// App.jsx > Body.jsx > Main.jsx > BDA.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
import ProjectDescription from '../display/ProjectDescription';

export default function BDA(){
    // name, repoURL, siteURL, stackObj
    const projectObj = {
        title: "BDA",
        repoURL: "https://github.com/mattrlucciola/bpm-detection-algorithm.git",
        siteURL: "https://mattrlucciola.github.io/bpm-detection-algorithm/",
        stackObj: {
            frontend: ['JavaScript (ES6)', 'Web Audio API'],
        },
    }
    return(
        <div className="BDA">
            <ProjectIntro projectObj={projectObj} />
            <ProjectPreview projectObj={projectObj} />
            <ProjectDescription projectObj={projectObj} />
        </div>
    )
}
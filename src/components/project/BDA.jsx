// App.jsx > Body.jsx > Main.jsx > BDA.jsx

// react
import React from 'react';

// projects
import ProjectNav         from '../display/ProjectNav';
import ProjectPreview     from '../display/ProjectPreview';
import ProjectDescription from '../display/ProjectDescription';
import ProjectStack       from '../display/ProjectStack';

export default function BDA(){
    const projectObj = {
        title: "BDA",
        repoURL: "https://github.com/mattrlucciola/bpm-detection-algorithm.git",
        siteURL: "https://mattrlucciola.github.io/bpm-detection-algorithm/",
        description: "Detects BPM and displays track information from user-added songs using a simple peak-detection algorithm",
        stackObj: {
            frontend: ['JavaScript (ES6)', 'Web Audio API'],
        },
        imgURL: "/assets/images/bda-preview.png",
    }
    return(
        <div className="BDA project">
            <ProjectNav projectObj={projectObj} />
            <ProjectPreview projectObj={projectObj} />
            <ProjectDescription projectObj={projectObj} />
            <ProjectStack projectObj={projectObj} />
        </div>
    )
}
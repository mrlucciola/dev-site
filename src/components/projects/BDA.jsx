// App.jsx > Body.jsx > Main.jsx > BDA.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
// import ProjectDescription from '../display/ProjectDescription';

export default function BDA(){
    const projectObj = {
        title: "BPM Detection Algorithm",
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
            <div className="intro-continer left"><ProjectIntro projectObj={projectObj} /></div>
            <div className="pd-container flexcol right">
                <ProjectPreview imgURL={projectObj['imgURL']} siteURL={projectObj['siteURL']} />
                {/* <ProjectDescription projectObj={projectObj} /> */}
            </div>
        </div>
    )
}
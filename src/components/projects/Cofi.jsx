// App.jsx > Body.jsx > Main.jsx > Cofi.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
// import ProjectDescription from '../display/ProjectDescription';

export default function Cofi(){
    const projectObj = {
        title: "Cofi: Step-sequencer",
        repoURL: "https://github.com/mattrlucciola/cofi.git",
        siteURL: "https://mattrlucciola.github.io/cofi/",
        description: `\
            A digital interface for synthesizing musical sequences in a step-wise manner.\
            Simply point and click on the note you want to activate, and the time at which to activate.\
        `,
        stackObj: {
            frontend: ['React.js', 'Web Audio API'],
        },
        imgURL: "/assets/images/cofi-preview.png",
    }
    return(
        <div className="Cofi project">
            <div className="intro-continer right"><ProjectIntro projectObj={projectObj} /></div>
            <div className="pd-container flexcol left">
                <ProjectPreview imgURL={projectObj['imgURL']} siteURL={projectObj['siteURL']} />
                {/* <ProjectDescription projectObj={projectObj} /> */}
            </div>
        </div>
    )
}
// App.jsx > Body.jsx > Main.jsx > Cofi.jsx

// react
import React from 'react';

// projects
import ProjectNav         from '../display/ProjectNav';
import ProjectPreview     from '../display/ProjectPreview';
import ProjectStack       from '../display/ProjectStack';
import ProjectDescription from '../display/ProjectDescription';

export default function Cofi(){
    const projectObj = {
        title: "Cofi",
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
            <ProjectNav projectObj={projectObj} />
            <ProjectPreview projectObj={projectObj} />
            <ProjectDescription projectObj={projectObj} />
            <ProjectStack projectObj={projectObj} />
        </div>
    )
}
// App.jsx > Body.jsx > Main.jsx > Tascal.jsx

// react
import React from 'react';

// projects
import ProjectNav         from './projectNav/ProjectNav';
import ProjectPreview     from './ProjectPreview';
import ProjectStack       from './ProjectStack';
import ProjectDescription from './ProjectDescription';

export default function Tascal(){
    const projectObj = {
        title: "Tascal",
        repoURL: "https://github.com/mattrlucciola/Tascal.git",
        siteURL: "https://tascal.dev",
        description: `\
            Project management, scheduling, productivity-tracking, and note taking app.
        `,
        stackObj: {
            frontend: ['React.js', 'Redux.js'],
            backend: ['MongoDB, Node.js, Django, Python'],
        },
        imgURL: "/assets/images/Tascal-preview.png",
    }
    return(
        <div className="Tascal project">
            <ProjectNav projectObj={projectObj} />
            <ProjectPreview projectObj={projectObj} />
            <ProjectDescription projectObj={projectObj} />
            <ProjectStack projectObj={projectObj} />
        </div>
    )
}
// App.jsx > Body.jsx > Main.jsx > Tascal.jsx

// react
import React from 'react';

// projects
import ProjectNav         from '../display/ProjectNav';
import ProjectPreview     from '../display/ProjectPreview';
import ProjectStack       from '../display/ProjectStack';
import ProjectDescription from '../display/ProjectDescription';

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
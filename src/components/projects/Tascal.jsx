// App.jsx > Body.jsx > Main.jsx > Tascal.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
// import ProjectDescription from '../display/ProjectDescription';

export default function Tascal(){
    const projectObj = {
        title: "Tascal",
        repoURL: "https://github.com/mattrlucciola/Tascal.git",
        siteURL: "https://tascal.dev",
        description: `\
            Project management, note taking app.
        `,
        stackObj: {
            frontend: ['React.js'],
            backend: ['MongoDB, Node.js, Django'],
        },
        imgURL: "/assets/images/Tascal-preview.png",
    }
    return(
        <div className="Tascal project">
            <div className="intro-continer right"><ProjectIntro projectObj={projectObj} /></div>
            {/* <div className="pd-container flexcol left"> */}
                <ProjectPreview imgURL={projectObj['imgURL']} siteURL={projectObj['siteURL']} />
                {/* <ProjectDescription projectObj={projectObj} /> */}
            {/* </div> */}
        </div>
    )
}
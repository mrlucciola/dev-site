// App.jsx > Body.jsx > Main.jsx > Diffuse.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
// import ProjectDescription from '../display/ProjectDescription';

export default function Diffuse(){
    const projectObj = {
        title: "Diffuse",
        repoURL: "https://github.com/mattrlucciola/diffuse.git",
        siteURL: "https://diffcult.com",
        description: `\
            Collaborative songwriting software.\
            Register, sign in, create and save projects to your profile.\
            Add others to contribute to your songs and track the history of the songs progression!\
        `,
        stackObj: {
            frontend: ['React.js'],
            backend: ['MongoDB, Node.js, Django'],
        },
        imgURL: "/assets/images/diffuse-preview.png",
    }
    return(
        <div className="Diffuse project">
            <div className="intro-continer right"><ProjectIntro projectObj={projectObj} /></div>
            <div className="pd-container flexcol left">
                <ProjectPreview imgURL={projectObj['imgURL']} siteURL={projectObj['siteURL']} />
                {/* <ProjectDescription projectObj={projectObj} /> */}
            </div>
        </div>
    )
}
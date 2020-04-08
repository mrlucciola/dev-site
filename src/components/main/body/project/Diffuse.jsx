// App.jsx > Body.jsx > Main.jsx > Diffuse.jsx

// react
import React from 'react';

// projects
import ProjectNav         from './ProjectNav';
import ProjectPreview     from './ProjectPreview';
import ProjectStack       from './ProjectStack';
import ProjectDescription from './ProjectDescription';

export default function Diffuse(){
    const projectObj = {
        title: "Diffuse",
        repoURL: "https://github.com/mattrlucciola/diffuse.git",
        siteURL: "https://diffuse.dev",
        description: `\
            Collaborative songwriting software.\
            Register, sign in, create and save projects to your profile.\
            Add others to contribute to your songs and track the history of the songs progression!\
        `,
        stackObj: {
            frontend: ['React.js', 'D3.js'],
            backend: ['MongoDB, Node.js, Django'],
        },
        imgURL: "/assets/images/diffuse-preview.png",
    }
    return(
        <div className="Diffuse project">
            <ProjectNav projectObj={projectObj} />
            <ProjectPreview projectObj={projectObj} />
            <ProjectDescription projectObj={projectObj} />
            <ProjectStack projectObj={projectObj} />
        </div>
    )
}
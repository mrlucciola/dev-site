// App.jsx > Body.jsx > Main.jsx > BikeStar.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectNav       from '../display/ProjectNav';
import ProjectPreview     from '../display/ProjectPreview';
// import ProjectDescription from '../display/ProjectDescription';

export default function BikeStar(){
    const projectObj = {
        title: "BikeStar",
        repoURL: "https://github.com/mattrlucciola/bikestar.git",
        siteURL: "https://tranquil-bastion-44697.herokuapp.com/",
        description: "This application allows cyclists to find trails in select cities.  The app maintains a user-generated list of trails, conaining useful information regarding navigation to and from the trail, features, and ratings.",
        stackObj: {
            frontend: ['React.js'],
            backend: ['Node.js', 'Express.js', 'PostgreSQL']
        },
        imgURL: "/assets/images/bikestar-preview.png",
        // body: "Search "
    }
    return(
        <div className="BikeStar project">
            <ProjectNav projectObj={projectObj} />
            <div className="intro-continer left"><ProjectIntro projectObj={projectObj} /></div>
            <div className="pd-container flexcol right">
                <ProjectPreview imgURL={projectObj['imgURL']} siteURL={projectObj['siteURL']} />
                {/* <ProjectDescription projectObj={projectObj} /> */}
            </div>
        </div>
    )
}
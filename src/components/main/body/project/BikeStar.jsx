// App.jsx > Body.jsx > Main.jsx > BikeStar.jsx

// react
import React from 'react';

// projects
import ProjectNav         from './projectNav/ProjectNav';
import ProjectPreview     from './projectPreview/ProjectPreview';
import ProjectStack       from './ProjectStack';
import ProjectDescription from './projectDescription/ProjectDescription';
// import ProjectDescription from './ProjectDescription';

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
            <ProjectPreview projectObj={projectObj} />
            <ProjectDescription projectObj={projectObj} />
            <ProjectStack projectObj={projectObj} />
        </div>
    )
}
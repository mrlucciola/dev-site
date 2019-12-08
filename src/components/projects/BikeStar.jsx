// App.jsx > Body.jsx > Main.jsx > BikeStar.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
import ProjectDescription from '../display/ProjectDescription';

export default function BikeStar(){
    return(
        <div className="BikeStar">
            <ProjectIntro />
            <ProjectPreview />
            <ProjectDescription />
        </div>
    )
}
// App.jsx > Body.jsx > Main.jsx > Cofi.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
import ProjectDescription from '../display/ProjectDescription';

export default function Cofi(){
    return(
        <div className="Cofi project">
            <ProjectIntro />
            <ProjectPreview />
            <ProjectDescription />
        </div>
    )
}
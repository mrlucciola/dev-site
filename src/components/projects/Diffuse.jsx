// App.jsx > Body.jsx > Main.jsx > Diffuse.jsx

// react
import React from 'react';

// projects
import ProjectIntro       from '../display/ProjectIntro';
import ProjectPreview     from '../display/ProjectPreview';
import ProjectDescription from '../display/ProjectDescription';

export default function Diffuse(){
    return(
        <div className="Diffuse">
            <ProjectIntro />
            <ProjectPreview />
            <ProjectDescription />
        </div>
    )
}
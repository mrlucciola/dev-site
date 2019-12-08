// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectPreview.jsx

// react
import React from 'react';

export default function ProjectPreview({imgURL}){
    return(
        <div className="ProjectPreview">
            <img src={imgURL} alt='' />
        </div>
    )
}
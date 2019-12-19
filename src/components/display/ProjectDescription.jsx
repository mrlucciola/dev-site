// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectDescription.jsx

// react
import React from 'react';

export default function ProjectDescription({projectObj}){
    // destructuring
    let {description} = projectObj;

    return(
        <div className="ProjectDescription">
            {description && description}
        </div>
    )
}
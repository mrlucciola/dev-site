// App > Main > Body > Project > ProjectDescription
// react
import React from 'react';
// style
import './ProjectDescription.css'

// main
export default function ProjectDescription({description}){
    return(
        <div className="ProjectDescription">
            <div className="text">
                {description && description}
            </div>
        </div>
    )
}
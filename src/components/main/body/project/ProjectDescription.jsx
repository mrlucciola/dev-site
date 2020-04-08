// App > Main > Body > Project > Description

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
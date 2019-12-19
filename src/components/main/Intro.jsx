import React from 'react';

// components
import ProjectNav from '../display/ProjectNav';

export default function Intro(){
    const projectObj = {
        title: "Matt Rocco Lucciola",
    }
    return(
        <div className='Intro' id="Intro" >
            <ProjectNav projectObj={projectObj} />
        </div>
    )
}
// react
import React from 'react';
// components
import Project from './project/Project';
import Progress from './progress/Progress';
import Intro from './Intro';
import {projectObjectsArr} from './projectObjectsArr'
// style
import './Body.css';

// main
export default function Body(){
    const buildProjectElems = (projectObjectsArr) => {
        return projectObjectsArr.map((projectObj, idx) => {
            return <Project projectObj={projectObj} key={`p-o-${idx}`} />
        })
    }
    return(
        <div className="Body">
            <Progress />
            <Intro />
            {buildProjectElems(projectObjectsArr)}
        </div>
    )
}
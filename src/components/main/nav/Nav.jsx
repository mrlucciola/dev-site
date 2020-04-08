// App.jsx > Main.jsx > Nav.jsx
// react
import React from 'react';
// redux
import {useSelector} from 'react-redux';
// style
import './Nav.css';
// util
import {slugify} from '../../../util/slugify';
// global vars
import {projectObjectsArr} from '../body/projectObjectsArr';

// main
export default function Nav(){
    // redux state
    let {currentProject} = useSelector(state => state['project'])
    console.log(currentProject)
    // build fxns
    const buildProjectElemList = (projectObjectsArr) => {
        return projectObjectsArr.map((projectObj, idx) => {
            const {title} = projectObj;
            return (
                <div
                    className="navProject"
                    onClick={() => {
                        console.log(window.location)
                        let newLocation = `${window.location.origin}#${slugify(title)}`;
                        window.location = newLocation;
                    }}
                    key={`n-p-${idx}`}
                >
                    {title}
                </div>
            )
        })
    }
    return(
        <div className="Nav">
            <div
                className="home"
                onClick={() => {
                    window.scroll(0, 0);
                    window.location = `${window.location.origin}#`;
                }}
            >
                Home
            </div>
            {buildProjectElemList(projectObjectsArr)}
            <div className="contact">Contact</div>
            <div className="about">About</div>
        </div>
    )
}
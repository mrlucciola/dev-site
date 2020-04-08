// App.jsx > Main.jsx > Nav.jsx
// react
import React from 'react';
// redux
import {useSelector} from 'react-redux';
// style
import './Nav.css';
// global vars
import {projectObjectsArr} from '../body/projectObjectsArr';

// main
export default function Nav(){
    console.log(projectObjectsArr)
    // redux state
    let {currentProject} = useSelector(state => state['project'])
    console.log(currentProject)
    // build fxns
    return(
        <div className="Nav">
            <div className="contact">Contact</div>
            <div className="about">About</div>
        </div>
    )
}
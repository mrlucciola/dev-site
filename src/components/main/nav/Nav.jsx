// App.jsx > Main.jsx > Nav.jsx
// react
import React from 'react';
// redux
import {useSelector, useDispatch} from 'react-redux';
import {updateCurrentProject} from '../../../redux/actions/projectActions';
// style
import './Nav.css';
// util
import {slugify} from '../../../util/slugify';
// global vars
import {projectObjectsArr} from '../body/projectObjectsArr';

// main
export default function Nav(){
    // redux state
    let dispatch = useDispatch();
    let {currentProject} = useSelector(state => state['project'])
    // build fxns
    const buildProjectElemList = (projectObjectsArr, dispatch, updateCurrentProject) => {
        return projectObjectsArr.map((projectObj, idx) => {
            const {title} = projectObj;
            return (
                <div
                    className={`navProject${currentProject['title'] === title ? ' active' : ''}`}
                    onClick={() => {
                        let newLocation = `${window.location.origin}#${slugify(title)}`;
                        window.location = newLocation;
                        dispatch(updateCurrentProject(projectObj))
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
            <div className="projectElemList">
                {buildProjectElemList(projectObjectsArr, dispatch, updateCurrentProject)}
            </div>
        </div>
    )
}
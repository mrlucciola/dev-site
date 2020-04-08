// App > Main > Body > Project
// react
import React, {useState} from 'react';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {updateCurrentProject} from '../../../../redux/actions/projectActions';
// components
import ProjectNav from './projectNav/ProjectNav';
// style
import './Project.css';
// event handlers
const onMouseMoveActivateProject = ({projectObj, currentProjectTitle, isActive, setIsActive, dispatch, updateCurrentProject}) => {
    if (!isActive) {
        if (projectObj['title'] === currentProjectTitle) {
            setIsActive(true);
        }
        dispatch(updateCurrentProject(projectObj));
    }
}
const onMouseLeaveDeactivateProject = (setIsActive) => {
    // setIsActive(false)
}
// main
export default function Project({projectObj}){
    console.log('po', projectObj)
    // destructure
    const {title, repoURL, siteURL, description, stackObj, imgURL} = projectObj;
    // redux state
    let dispatch = useDispatch();
    const {currentProject} = useSelector(state => state['project']);
    const currentProjectTitle = currentProject['title']
    console.log('current', title, currentProjectTitle, currentProjectTitle === title)
    // component state
    const [isActive, setIsActive] = useState(false);
    return(
        <div
            className={`Project${isActive ? ' active' : ''}`}
            onMouseMove={() => {onMouseMoveActivateProject({projectObj, currentProjectTitle, setIsActive, dispatch, updateCurrentProject, isActive})}}
            onMouseLeave={() => {onMouseLeaveDeactivateProject(setIsActive)}}
        >
            <ProjectNav projectObj={projectObj} />
        </div>
    )
}
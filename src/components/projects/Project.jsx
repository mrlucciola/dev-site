// App > Main > Body > Project
// react
import React from 'react';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {updateCurrentProject} from '../../../../redux/actions/projectActions';
// components
import ProjectNav from './projectNav/ProjectNav';
import ProjectPreview from './projectPreview/ProjectPreview';
import ProjectDescription from './projectDescription/ProjectDescription';
import ProjectStack from './projectStack/ProjectStack';
// style
import './Project.css';
import { slugify } from '../../../../util/slugify';
// event handlers
const onEventActivateProject = ({e, projectObj, isActive, dispatch, updateCurrentProject}) => {
    if (!isActive) {
        dispatch(updateCurrentProject(projectObj));
        window.history.replaceState(null, null, `${window.location.origin}#${slugify(projectObj['title'])}`)
    }
}

// main
export default function Project({projectObj}){
    // destructure
    const {title, siteURL, description, stackObj, imgURL} = projectObj;
    // redux state
    let dispatch = useDispatch();
    const {currentProject} = useSelector(state => state['project']);
    const currentProjectTitle = currentProject['title'];
    const isActive = title === currentProject['title'];
    console.log('current', title, currentProjectTitle, currentProjectTitle === title)
    return(
        <div
            id={slugify(title)}
            className={`Project${isActive ? ' active' : ''} w100`}
            onScroll={(e) => {onEventActivateProject({projectObj, currentProjectTitle, dispatch, updateCurrentProject, isActive})}}
            onMouseOver={(e) => {onEventActivateProject({projectObj, currentProjectTitle, dispatch, updateCurrentProject, isActive})}}
        >
            <ProjectNav projectObj={projectObj} />
            <ProjectPreview imgURL={imgURL} siteURL={siteURL} />
            <div className="bottom">
                <ProjectDescription description={description} />
                <ProjectStack stackObj={stackObj} />
            </div>
        </div>
    )
}
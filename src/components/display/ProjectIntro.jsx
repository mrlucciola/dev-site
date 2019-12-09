// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectIntro.jsx

// react
import React from 'react';

export default function ProjectIntro({projectObj}){
    // destructuring
    if (projectObj){
        let {title, repoURL, siteURL, stackObj} = projectObj;
    } else {
        let title, repoURL, siteURL, stackObj;
    }

    const showProperty = (projectObj, param) => {
        if (projectObj) {
            return projectObj[param]
        } else {
            return 'nothing'
        }
    }
    const buildStackElem = () => {
        // holds our whole stack
        let stackElemArr = []

        let stackObj = showProperty(projectObj, 'stackObj');
        if (typeof stackObj !== typeof {}) {
            return <div className="notstack"></div>
        }
        for (const key in stackObj) {
            const toolsArr = stackObj[key]
            const toolsElemArr = toolsArr.map((tool, idx) => {
                return (
                    <div className={`${key} tool`} key={`${key}-${tool}-${idx}`}>{tool}</div>
                )
            })
            stackElemArr.push(
            <div className={`${key} group`}>
                <div className="group-title">{key} </div>
                <div className="group-list">{toolsElemArr} </div>
            </div>
            )
        }

        return (
            <div className="stack">{stackElemArr}</div>
        )
    }
    return(
        <div className="ProjectIntro">
            <div className="title">{showProperty(projectObj, 'title')}</div>
            <div className="urls">
                <div className="url-container">
                    <a className="repoURL" href={showProperty(projectObj, 'repoURL')}>GitHub Repo</a>
                    <a className="siteURL" href={showProperty(projectObj, 'siteURL')}>Website</a>
                </div>
            </div>
            <div className="description">{showProperty(projectObj, 'description')}</div>
            {buildStackElem()}
        </div>
    )
}
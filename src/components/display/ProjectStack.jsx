// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectIntro.jsx

// react
import React from 'react';

export default function ProjectStack({projectObj}){
    // destructuring
    let {stackObj} = projectObj;

    const buildStackElem = () => {
        // holds our whole stack
        let stackElemArr = []

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
        return stackElemArr
    }
    return(
        <div className="ProjectStack">
            {buildStackElem()}
        </div>
    )
}
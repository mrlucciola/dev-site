// App > Main > Body > Project > ProjectStack
// react
import React from 'react';
// style
import './ProjectStack.css'

// main
export default function ProjectStack({stackObj}){
    // destructuring
    // let {} = stackObj;
    // build fxns
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
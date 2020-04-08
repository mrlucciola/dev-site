// App.jsx > Body.jsx > Main.jsx

// react
import React from 'react';

// projects
import Progress from './Progress';
import BDA from '../project/BDA';
import Diffuse from '../project/Diffuse';
import BikeStar from '../project/BikeStar';
import Cofi from '../project/Cofi';

export default function Main(){
    return(
        <div className="Main" onScroll={(e) => {}} >
            <Progress />
            <BDA />
            <Diffuse />
            <BikeStar />
            <Cofi />
        </div>
    )
}
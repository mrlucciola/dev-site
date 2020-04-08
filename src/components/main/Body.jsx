// react
import React from 'react';

// components
import Main from './Main';
import Nav from './Nav';
import Progress from './Progress';
import Intro from './Intro';
import BDA from '../project/BDA';
import Diffuse from '../project/Diffuse';
import BikeStar from '../project/BikeStar';
import Cofi from '../project/Cofi';

// main
export default function Body(){
    return(
        <div className="Body">
            <Progress />
            {/* <Nav /> */}
            {/* <Main /> */}
            <Intro />
            <BDA />
            <Diffuse />
            <BikeStar />
            <Cofi />
        </div>
    )
}
import React from 'react';

// components
import Main from './Main';
import Nav from './Nav';
import Progress from './Progress';
import Intro from './Intro';
import BDA from '../projects/BDA';
import Diffuse from '../projects/Diffuse';
import BikeStar from '../projects/BikeStar';
import Cofi from '../projects/Cofi';

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
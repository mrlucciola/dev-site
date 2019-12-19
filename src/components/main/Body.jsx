import React from 'react';

// components
import Main from './Main';
import Nav from './Nav';

import BDA from '../projects/BDA';
import Diffuse from '../projects/Diffuse';
import BikeStar from '../projects/BikeStar';
import Cofi from '../projects/Cofi';

export default function Body(){
    return(
        <div className="Body">
            {/* <Nav /> */}
            {/* <Main /> */}
            
            <BDA />
            <Diffuse />
            <BikeStar />
            <Cofi />
        </div>
    )
}
import React from 'react';

// components
import Main from './Main';
import Nav from './Nav';

export default function Body(){
    return(
        <div className="Body">
            <Nav />
            <Main />
        </div>
    )
}
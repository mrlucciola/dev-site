// App.jsx > Body.jsx > Main.jsx

// react
import React from 'react';

// projects
import Body from './body/Body';
import Nav from './body/Nav';

export default function Main(){
    
    return(
        <div className="Main" onScroll={(e) => {}} >
            <Nav />
            <Body />
        </div>
    )
}
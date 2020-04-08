// App.jsx > Body.jsx > Main.jsx

// react
import React from 'react';

// projects
import Body from './Body';
import Nav from './Nav';

export default function Main(){
    
    return(
        <div className="Main" onScroll={(e) => {}} >
            <Nav />
            <Body />
        </div>
    )
}
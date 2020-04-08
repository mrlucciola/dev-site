// App > Main > Body
// react
import React from 'react';
// style
import './Main.css';

// projects
import Body from './body/Body';
import Nav from './nav/Nav';

export default function Main(){
    return(
        <div className="Main" >
            <Nav />
            {/* <Body /> */}
        </div>
    )
}
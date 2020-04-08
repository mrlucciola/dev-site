// react
import React, {useState} from 'react';

// main
export default function Progress(){
    // component state
    const [scrollProgress, setScrollProgress] = useState(0);

    // util fxn
    const updateScrollProgress = (e) => {
        let scrollMax = e.srcElement.scrollingElement.scrollHeight - e.srcElement.scrollingElement.clientHeight;
        let scrollCurrent = e.srcElement.scrollingElement.scrollTop;
        let scrollPct = scrollCurrent / scrollMax;
        if (scrollPct <= 1 && scrollPct >= 0) {
            setScrollProgress(() => {return scrollPct})
        }
    }

    window.onscroll = updateScrollProgress
    const scrollProgressStyle = {
        left: 0,
        height: '100%',
        width: `${scrollProgress * 100}%`,
    }
    return(
        <div className="Progress noselect" >
            <div className='prog-amt noselect' style={scrollProgressStyle} ></div>
            <div>
            </div>
        </div>
    )
}
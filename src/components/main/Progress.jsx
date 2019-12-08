import React, {useState} from 'react';

export default function Progress(){
    // destructuring

    // state
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeProgress, setActiveProgress] = useState(false);
    const [mouseIsDown, setMouseIsDown] = useState(false);

    // util
    const updateScrollProgress = (e) => {
        let scrollMax = e.srcElement.scrollingElement.scrollHeight - e.srcElement.scrollingElement.clientHeight;
        let scrollCurrent = e.srcElement.scrollingElement.scrollTop;
        let scrollPct = scrollCurrent / scrollMax;
        if (scrollPct <= 1 && scrollPct >= 0) {
            setScrollProgress(() => {return scrollPct})
        }
    }
    const clickScrollProgress = (e) => {
        let pageHeight = e.clientY
        let elementHeight = e.currentTarget.offsetHeight;
        let offsetTop = e.currentTarget.getBoundingClientRect().top;

        let yCoordPct = (pageHeight - offsetTop) / elementHeight;

        // let scrollMax = document.body.scrollHeight - window.outerHeight;
        let scrollMax = document.body.scrollHeight - window.innerHeight;
        let scrollCurrent = window.scrollY;
        // let scrollPct = scrollCurrent / scrollMax;
        window.scrollTo(0, yCoordPct * scrollMax)
    }

    window.onscroll = updateScrollProgress
    const scrollProgressStyle = {
        top: 0,
        height: `${scrollProgress * 100}%`,
    }
    return(
        <div className="Progress noselect" 
            onMouseDown={() => {setMouseIsDown(() => true); setActiveProgress(() => true); console.log('activated')}}
            onMouseMove={(e) => {activeProgress && clickScrollProgress(e)}}
            onMouseUp={() => {setMouseIsDown(() => false); setActiveProgress(() => false); console.log('deactivated')}}
            onMouseLeave={() => {if (!mouseIsDown) {setActiveProgress(() =>  false); console.log('deactivated')}}}
            >
            <div className='prog-amt noselect' style={scrollProgressStyle} ></div>
            <div>
            </div>
        </div>
    )
}
// import React from 'react'
// import '../ScrollToTop/index.css'
// import {useWindowScroll} from "react-use"
// const ScrollToTop = () => {
//     return (
//         <div style={{position:'fixed',marginRight:'2vw',color:'#063970',marginLeft:'-1vw',borderRadius:'100%'}}>
//             <i className="icon fas fa-chevron-up">

//             </i>
            
//         </div>
//     )
// }

// export default ScrollToTop
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollIndicator = () => {
    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrolled((y / height) * 100);
    }, [y]);

    return (
        <div className="scroll-containe">
            <div className="indicator" style={{ width: `${scrolled}%` }}></div>
        </div>
    );
};

export default ScrollIndicator;
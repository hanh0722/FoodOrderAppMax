import React from 'react';

const Backdrop = ({className, changeOverlay}) =>{
    return(
        <div className={className} onClick={changeOverlay}></div>
    )
}

export default Backdrop;
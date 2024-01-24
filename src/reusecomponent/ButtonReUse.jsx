import React from 'react';

function ButtonReUse({className,label,onClick}){
    return <button className={className} onClick={onClick}>{label}</button>

}

export default ButtonReUse;

import React from 'react';

function ButtonReUse({className,label,onClick,type,value,onSubmit}){
    return <button className={className} onClick={onClick} type={type} value={value} onSubmit={onSubmit}>{label}</button>
}

export default ButtonReUse;
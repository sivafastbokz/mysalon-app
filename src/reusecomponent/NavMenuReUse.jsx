import React from 'react';

function NavMenuReUse({href,label,onClick,className}){
    return <li><a href={href} onClick={onClick} className={className}>{label}</a></li>
}

export default NavMenuReUse;
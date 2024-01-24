import React from 'react';

function NavMenuReUse({href,label,onClick}){
    return <li><a href={href} onClick={onClick}>{label}</a></li>
}

export default NavMenuReUse;
import React from 'react';
import cover from './images/cover.jpg';

function Cover() {
    return ( 
        <img className="img-responsive d-none d-sm-block" src={cover} alt="cover" width={"100%"} height={"500px"}/>
     );
}

export default Cover;
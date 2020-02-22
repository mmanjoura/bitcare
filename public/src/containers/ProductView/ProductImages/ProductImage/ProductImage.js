import React, {Component} from 'react';

const image = ( props ) => {
    return(
        <li>
        <a href="#" data-image={props.dataimage} data-zoom-image={props.datazoomimage}>
            <img src={props.dataimage}  alt="" />
        </a>
    </li>
    );
}

export default image;
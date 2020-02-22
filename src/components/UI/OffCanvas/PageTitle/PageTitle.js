import React from 'react';
import Aux from './../../../../hoc/Aux/Aux';

const pageTitle = (props) => {
    return(
        <Aux>
            <div className="page-title">
                <div className="container">
                <div className="column">
                    <h1>{props.title}</h1>
                </div>
                <div className="column">
                    <ul className="breadcrumbs">
                    <li><a href="index.html">Home</a>
                    </li>
                    <li className="separator">&nbsp;</li>
                    <li><a href="shop-grid-ls.html">Shop</a>
                    </li>
                    <li className="separator">&nbsp;</li>
                    <li>{props.title}</li>
                    </ul>
                </div>
                </div>
            </div>
        </Aux>
    );
}

export default pageTitle;
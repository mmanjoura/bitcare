import React from 'react';

const input = ( props ) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                 />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
                />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    value={props.value}
                    >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
               />;
    }

    return (
            {inputElement}
    );

};

export default input;
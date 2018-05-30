import React from 'react';

const person = (props ) => {
    return (
        <div>
            <p>I am {props.name} Bitch, I am {props.age} old</p>
            <p>{ props.children}</p>
        </div>
    )
};

export default person;
import React from 'react';

const person = (props ) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} Bitch, I am {props.age} old</p>
            <p>{ props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
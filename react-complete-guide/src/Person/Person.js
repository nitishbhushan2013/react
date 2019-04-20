import React from 'react';

// This is dynamic template
const person = (props) => {
        return ( 
            <div> 
            <h3> My name is {props.name} and I work at {props.company}. </h3>
            <h4> { props.children} </h4>
            </div>
        );
    }
export default person;
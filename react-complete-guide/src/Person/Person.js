import React from 'react';

// This is dynamic template
const person = (props) => {
        return ( <h3> My name is {props.name} and I work at {props.company}. </h3> );
        }

export default person;
import React from 'react';
import './Person.css'

// This is dynamic template
const person = (props) => {
        return ( 
            <div className="Person"> 
                <h3 onClick = {props.click}> My name is {props.name} and I work at {props.company}. </h3>
                <h4> Name : <input type='text' onChange = {props.updateName}  defaultValue = {props.name}/></h4> 
                <h4> Company : <input type='text' onChange = {props.updateCompany}  defaultValue = {props.company}/></h4> 
                
                <h4> { props.children} </h4>
            </div>
        );
    }
export default person;
import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    props.persons.map((person, index) => {
        return <Person 
           key = {person.id}
           name = {person.name} 
           company = {person.company}
           updateName = {(event) => props.updateName(event, index)} // since its onChange event, so it accept event as a function prameter. 
           updateCompany = {(event) => props.updateCompany(event, index)}
           deleteUser = {() => props.delete(index)}
           style = {props.classes}
         />
      })  
);

export default persons;
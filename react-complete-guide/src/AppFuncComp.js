import React, { useState } from 'react';

import Person from './Person/Person';

const AppFuncComp = (props) => {
  // first element is orginal property object and second element is method to 
  //update the proeprty.
  const[personState, setPersonState] = useState({
    persons : [
      {name : "Nitish", company : "Google"},
      {name : "Matt", company : "Facebook"},
      {name : "Arthur", company : "DropBox"}
    ]
  });

  const nameChangeHandler = () => {
    // this call would REPLACES the original state and hence if we have some more attributes in the original state which is not defined here, it will be lost.
    setPersonState({
      persons : [
        {name : "Nitish Bhushan", company : "Google HQ"},
        {name : "Matt", company : "Facebook"},
        {name : "Arthur", company : "Macquarie"}
      ]
    });
  }

    return (
      <div className="App">
         <Person name = {personState.persons[0].name} company = {personState.persons[0].company}/>
         <Person name = {personState.persons[1].name} company = {personState.persons[1].company}/>
         <Person name = {personState.persons[2].name} company = {personState.persons[2].company}> Arthur stay at Sydney. </Person>

         <button onClick = {nameChangeHandler} > Switch Name </button>
      </div>
    );
}

export default AppFuncComp;



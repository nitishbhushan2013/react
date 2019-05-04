import React, {useEffect} from 'react';

const cockpit = (props) => {

    useEffect (()=>{
      console.log("cockpit.js | useEffect"); 
    }, []);
    

    const style ={
        backgroundColor : 'red',
        color : 'white',
        border : '1px solid blue',
        margin : '1%',
       
        padding : '2px',
        cursor : 'pointer'
      }

    return(
        <div>
        <button 
          style = {style} 
          onClick = {props.toggleName}  > Toggle Name </button>
         <button 
          style = {style}
          onClick = {props.nameChangeHandler} > Switch Name - first way 
         </button>         
         <button 
          style = {style} 
          onClick = {props.customNameChangeHandler.bind(this, "Mr. Nitish Bhushan", "Google HQ")} > Custom Name </button>        
         <button 
          style = {style} 
          onClick = { () => props.customNameChangeHandler("Mr. Andrew Kasis", "Macquarie")}> Switch name - second way </button>
      
        

      <h2> <hr></hr>Two way communication between components</h2>
         </div> 
    );

}

export default cockpit;
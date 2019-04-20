import React from 'react';

const emp = (props) => {
    return (
        <div>
            <h3> Employee name : {props.name}</h3>
            <input type="textbox" defaultValue={props.name} onChange={props.changed}/> 
        </div>
    );
}

export default emp;
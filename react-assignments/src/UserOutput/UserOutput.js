import React from 'react';

const userOutput = (props)=> {
    return (
        <div >
            <h3> first username : {props.userName1}</h3>  
            <h3> second username : {props.userName2}</h3>  
        </div>
        
    )
}

export default userOutput;
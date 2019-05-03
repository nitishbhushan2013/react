import React from 'react';

const validation = (props) => {

    let validationMessage = "Text long enough";
    
    if(props.count <=5)
        validationMessage = "Text too short";
        
    return (
       <div>
          {validationMessage}
       </div>
        
    )
}
export default validation;
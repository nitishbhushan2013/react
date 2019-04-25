import React from 'react';

const userInput = (props) => {
   return (
    <input type='text' name = 'name' onChange = {props.nameChange} />
   );
}

export default userInput;
import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) =>{
    

    return (
        <div className='BuildControl'>
       
            <div className='Label'> {props.label}</div>
            <button className='More' onClick = {props.addIngredient}>more</button>
            <button className='Less' 
                    onClick = {props.removeIngredient}
                    //disabled= {props.isDisabled}
                    
                    >less</button>
        </div>
    );
};

export default buildControl;
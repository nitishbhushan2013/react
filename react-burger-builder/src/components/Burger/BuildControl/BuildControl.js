import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) =>{
    return (
        <div className='BuildControl'>
            <div className='Label'> {props.Label}</div>
            <button className='More'>more</button>
            <button className='Less'>less</button>
        </div>
    );
};

export default buildControl;
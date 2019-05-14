import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const buildControls = (props) =>{
    return(
        <div className={styles.BuildControls}>
        <BuildControl label="cheese"/>
        </div>
    );
    };

export default buildControls;
import React from 'react';
import modalStyles from './Modal.module.css';

const modal = (props) =>{
    return(
        <div className={modalStyles.Modal}>
            {props.children} 
        </div>
    );
}

export default modal;
import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) =>{
    return(
        <div className={styles.Backdrop} onClick={props.toggleModal}>

        </div>
    );
}

export default Backdrop;
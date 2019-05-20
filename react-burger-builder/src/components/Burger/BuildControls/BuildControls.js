import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const control = [
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Meat", type:"meat"},
    {label:"Cheese", type:"cheese"}
]

const buildControls = (props) =>{
    return(
        <React.Fragment>
            <div className={styles.BuildControls}>
            {
                control.map(ctrl => (
                    <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    addIngredient={()=> props.addIngredient(ctrl.type)}
                    removeIngredient= {()=> props.removeIngredient(ctrl.type)}
                    isDisabled={()=>props.isDisabled[ctrl.type]}
                    />
                ))
            }

            <div className={styles.OrderButton}>
                <button name="OrderNow" 
                >OrderNow</button>
            </div>
            </div>
            
        </React.Fragment>     
    );
    };

export default buildControls;
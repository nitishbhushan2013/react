import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import styles from './BuildControls.module.css';
import Modal from '../../UI/Modal/Modal';
import Ordersummary from '../Ordersummary/Ordersummary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const control = [
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Meat", type:"meat"},
    {label:"Cheese", type:"cheese"}
]
let modelshown = null;
const buildControls = (props) =>{
    
    modelshown =   props.show ?  
                        <Aux>
                            <Backdrop toggleModal={props.toggleModal}/ >
                            <Modal  >
                                <Ordersummary ingredients={props.ingredients}/>
                            </Modal>
                         </Aux>
                         : null;
    

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
            {modelshown}
           
            <div className={styles.OrderButton}>
                <button name="OrderNow"  onClick={props.showModal}
                >OrderNow</button>
            </div>
            </div>
            
        </React.Fragment>     
    );
    };

export default buildControls;
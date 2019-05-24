import React from 'react';
import Aux from '../../../hoc/Aux';

const ordersummary = (props) =>{
    const orderIngredient = Object.keys(props.ingredients)
                            .map(item=>{
                                
                                return (
                                    <li key={item}> {item} : {props.ingredients[item]} </li>
                                )
                            })

    return(
        <Aux>
             <h3> This is the order summary details:</h3>
             <ui>
                {orderIngredient}     
            </ui>   

        </Aux>
    );
}

export default ordersummary;
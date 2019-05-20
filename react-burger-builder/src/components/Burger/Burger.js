import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props)=>{
    
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient key = {igkey+i} type={igkey} />
        })
    });

    
    return(
        <React-Fragement>
            <div className={styles.Burger}>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
                <div>price details : {props.totalPrice}</div>
            </div>
           
        </React-Fragement> 
    );
}

export default burger;
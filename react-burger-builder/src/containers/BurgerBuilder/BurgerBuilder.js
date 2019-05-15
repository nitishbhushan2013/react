import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE={
    salad: 0.5,
    meat: 2,
    bacon:1,
    cheese:1
}
class BurgerBuilder extends Component {

    state = {
        ingredients :{
            salad:0,
            meat:0,
            bacon:0,
            cheese:0
        },
        totalPrice :10
    }

    addIngredient=(type)=>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount+1;
        let updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type] = newCount;
        
        let updatedPrice = this.state.totalPrice;
        updatedPrice = updatedPrice + INGREDIENT_PRICE[type];

        // updating state
        this.setState({
            ingredients : updatedIngredient,
            totalPrice : updatedPrice
        })
    }

    removeIngredient=(type)=>{
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount -1;

        if(oldCount <= 0 )
           return;
            
        let updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type] = newCount;

        let updatedPrice = this.state.totalPrice;
        
        updatedPrice = updatedPrice - INGREDIENT_PRICE[type];
       

        // updating state
        this.setState({
            ingredients : updatedIngredient,
            totalPrice : updatedPrice
        })
    }

    isDisabled = (type)=>{
        if(this.state.ingredients[type] === 0) {
            alert(1)
            return true;
        }   
        else{    
            return false;    
        }    
    }
    //life cycle method
   render(){

    const disabledInfo = {...this.state.ingredients}
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <=0;
    }
       return(
           <Aux>
               <div className="Container">
                    <Burger ingredients={this.state.ingredients}
                            totalPrice ={this.state.totalPrice}    />
                    <BurgerControls 
                        addIngredient = {this.addIngredient}
                        removeIngredient = {this.removeIngredient}
                        isDisabled = {disabledInfo}
                        />
               </div>
           </Aux>
       );
   }

}

export default BurgerBuilder;
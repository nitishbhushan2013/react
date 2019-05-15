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
            salad:1,
            meat:1,
            bacon:1,
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
        const newCount = oldCount -1;
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
    //life cycle method
   render(){
       return(
           <Aux>
               <div className="Container">
                    <Burger ingredients={this.state.ingredients}/>
                    <BurgerControls 
                        addIngredient = {this.addIngredient}
                        removeIngredient = {this.removeIngredient}
                        />
               </div>
           </Aux>
       );
   }

}

export default BurgerBuilder;
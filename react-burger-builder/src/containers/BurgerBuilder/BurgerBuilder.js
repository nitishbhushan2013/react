import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients :{
            salad:1,
            meat:1,
            bacon:1,
            cheese:0
        }
    }
    //life cycle method
   render(){
       return(
           <Aux>
               <div className="Container">
                    <Burger ingredients={this.state.ingredients}/>
                    <BurgerControls/>
               </div>
           </Aux>
       );
   }

}

export default BurgerBuilder;
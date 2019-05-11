import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    //life cycle method
   render(){
       return(
           <Aux>
               <div className="Container">
                    <Burger/>
                    <div>Burger Control</div>
               </div>
           </Aux>
       );
   }

}

export default BurgerBuilder;
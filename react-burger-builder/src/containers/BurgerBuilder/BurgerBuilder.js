import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    //life cycle method
   render(){
       return(
           <Aux>
               <div className="container">
                    <div>Burger </div>
                    <div>Burger Control</div>
               </div>
           </Aux>
       );
   }

}

export default BurgerBuilder;
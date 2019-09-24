//get the redux 
const {createStore} = require('redux');

//get the state
const initialState = {
    count:10
}

//define reducer : feducer takes two parameters : state and action
const myReducer = ((state=initialState, action)=>{ // ES6 : provide default value to state
    //get new state
    const newState = {...initialState}; // ES6 : Spread operator

    //define action behavior
    switch(action.type) {
        case 'add':
             newState.count += 2;
             break;
        case 'substract':
            newState.count -=2;
            break;
        case 'multiply':
            newState.count *=2;   
            break;      
    }
    return newState; // always returns updated state
})

// define store : it takes reducer as a parameter
const myStore = createStore(myReducer);
console.log("Initial state: "+JSON.stringify(myStore.getState()));
//perform action
myStore.dispatch({type: 'add'}) // 'add' is action pass to reducer
console.log("add action : "+JSON.stringify(myStore.getState()));

myStore.dispatch({type: 'substract'})
console.log("substract action : "+JSON.stringify(myStore.getState()))

myStore.dispatch({type: 'multiply'})
console.log("multiply action : "+JSON.stringify(myStore.getState()))
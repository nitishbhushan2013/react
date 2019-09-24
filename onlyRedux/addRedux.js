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
             newState.count += action.val;
             break;
        case 'substract':
            newState.count -=action.val;
            break;
        case 'multiply':
            newState.count *=action.val;   
            break;      
    }
    return newState; // always returns updated state
})

// define store : it takes reducer as a parameter
const myStore = createStore(myReducer);

// subscribe will accept function and it will be called when ever there is state change
myStore.subscribe(()=>{
    console.log("state changed "+JSON.stringify(myStore.getState()));
});
//
//perform action, passing the payload 
myStore.dispatch({type: 'add',val:10}) // 'add' is action pass to reducer
//console.log("add action : "+JSON.stringify(myStore.getState()));

myStore.dispatch({type: 'substract', val:10})
///console.log("substract action : "+JSON.stringify(myStore.getState()))

myStore.dispatch({type: 'multiply', val:10})
//console.log("multiply action : "+JSON.stringify(myStore.getState()))
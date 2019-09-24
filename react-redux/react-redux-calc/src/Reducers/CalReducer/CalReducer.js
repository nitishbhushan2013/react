/*
We define the initial State and reducer function 
*/ 

const initialState = {
    firstNum: 40,
    secondNum: 10,
    result : 0
}

/**
 * It accept two parameter, state and action 
 */
const reducer = (state = initialState, action) => {

    // Since state is immutable, we need to create a new state to mutate its value
    const newState = {...state};
    console.log("newState>>"+JSON.stringify(newState)+" "+action.type);
    // perform business operation for each action.type
    switch(action.type){
        case 'ADD':
            newState.result = newState.firstNum + newState.secondNum;
            break;
        case 'SUB':
            newState.result = newState.firstNum - newState.secondNum;
            break;
        case 'MUL':
            newState.result = newState.firstNum * newState.secondNum;
             break;   
         default:
            break;     
    }

    return newState;
}

export default reducer;
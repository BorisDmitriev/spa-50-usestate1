import React from 'react'
import { useReducer } from 'react';


const reducerFunction = (state, action) => {
    switch (action.type) {
        case "increase":
            return {...state, count: state.count + 1}
            case "decrease":
                return {...state, count: state.count -1}    
        default:
            return state;
    }
}

const InitialState = {
    count : 0,
}

export default function Counter(){

    const [state, dispatch] = useReducer(reducerFunction, InitialState);

    const {count} = state

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({type:"increase"})}>Increment</button>
            <button onClick={() => dispatch({type:"decrease"})}>Decrease</button>
        </div>
    );
}
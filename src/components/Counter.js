import React from 'react';
import { useReducer } from 'react';

const Counter = () => {    
    const initialState=1

const reducer=(state,action)=>{
    if(action==='add'){
        return (state=state+1)
    }
    else if(action==='add'){
        return (state=state+1)
    }
    else{
        return initialState
    }
}


    const [state,dispatch]=useReducer(reducer,initialState)

    
    return (
        <div>
             <button style={{marginRight:20}} onClick={()=>{
                dispatch('minus')
            }}>-</button>
            {state}
            <button style={{marginLeft:20}} onClick={()=>{
                dispatch('add')
            }}>+</button>
        </div>
    );
}


export default Counter;

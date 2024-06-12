import React from 'react';
import { useReducer } from 'react';

const initialState=0

const reducer=(state,action)=>{
    if(action==='add'){
        return (state=state+1)
    }
    else{
        state=0
    }

}


const Counter = () => {    
    const userReducerResult=useReducer(reducer,initialState)

    const [state,dispatch]=userReducerResult

    console.log(dispatch)
    console.log(state)

    
    return (
        <div>
            {state}
            <button onClick={()=>{
                dispatch('add')
            }}>add</button>
        </div>
    );
}


export default Counter;

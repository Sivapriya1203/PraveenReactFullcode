import React from 'react'

function ReducerExample() {
    const initalvalue=0;
    const counting=(state,setState)=>{
    switch(setState){
        case 'INCREMENT':
            return state+1;
            case 'DECREMENT':
                return state-1;
                case 'RESET':
                    return initalvalue;
        default:
            return state;
    }
}
const [count,setCount]= React.useReducer(counting,initalvalue);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount('INCREMENT')}>Increment</button>
        <button onClick={()=>setCount('DECREMENT')}>Decrement</button>
        <button onClick={()=>setCount('RESET')}>Reset</button>
    </div>
  )
}

export default ReducerExample
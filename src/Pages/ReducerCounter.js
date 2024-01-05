import React ,{ useReducer}from 'react'
import './Redux.css'

const initial ={
    val:10,
    color:"blue"
}

// const valReducer = (state,action)=>{
//     switch(action.type){
//         case 'increment':
//             return({...state,val:state.val+action.payload})
//         case 'increment':
//             return({...state,val:state.val+action.payload})
    

//     }
// }


const valReducer = (state,action)=>{
    switch(action.type){
        case 'change_value':
            return({...state,val:state.val+action.payload})
        case 'change_color':
            return({...state,color:action.payload})
    
        default:
            return{...state}
    }
}

export default function ReducerCounter() {
    const [state,dispatch] = useReducer(valReducer,initial)
   
    const increment = ()=> {
        return(dispatch({
            type:'change_value',
            payload:1
        }))
    }
    const decrement = ()=> {
        return(dispatch({
            type:'change_value',
            payload:-1
        }))
    }
    const change_red = ()=>{
        return(dispatch({
            type:'change_color',
            payload:"red"
        }))
    }
    const change_green = ()=>{
        return(dispatch({
            type:'change_color',
            payload:"green"
        }))
    }
  return (
    <div className='container'> 
        <div className='box'>
            <div className='center' style={{backgroundColor:state.color}}>
              <button onClick={increment}>increment</button>
              <h1>{state.val}</h1>
              <button onClick={decrement}>decrement</button>
            </div>
            <div className='lb' onClick={change_red}>Red</div>
            <div className='rb' onClick={change_green}>Green</div>
        </div>
    </div>
  )
}

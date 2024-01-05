import { useReducer } from 'react'
import './Redux.css'
const TYPE = {
  CHANGE_VALUE:'change_value',
  CHANGE_COLOR: 'change_color'
}
const initial ={
  value:0,
  color:'red'
}
function valueReducer(state,action){
    switch(action.type){
      case TYPE.CHANGE_VALUE:
        return{...state,
            value:state.value+action.payload
        }
      case TYPE.CHANGE_COLOR:
        return{...state,
             color:action.payload
      }
      default:
        return state;

    }
}
export default function () {

  const [state,dispatch]= useReducer(valueReducer,initial)
  const increment = ()=>{
    dispatch({type:TYPE.CHANGE_VALUE,
    payload:1
  })
  }

  const decrement = ()=>{
    dispatch({type:TYPE.CHANGE_VALUE,
    payload:-1
  })
  }
  return (
    <div className='container'> 
        <div className='box'>
            <div className='center' style={{backgroundColor:state.color}}>
              <button onClick={increment}>increment</button>
              <h1>{state.value}</h1>
              <button onClick={decrement}>decrement</button>
            </div>
            <div className='lb' onClick={()=>{
              dispatch({
                type:TYPE.CHANGE_COLOR,
                payload:'red'
              })
            }}>Red</div>
            <div className='rb' onClick={()=>{
              dispatch({
                type:TYPE.CHANGE_COLOR,
                payload:'green'
              })
            }}>Green</div>
        </div>
    </div>
  )
}

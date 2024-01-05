import React,{useState} from 'react'
import './Redux.css'
import { useSelector, useDispatch } from 'react-redux'

import { change_value } from '../ReduxToolkit/valueSlice';
import { change_color } from '../ReduxToolkit/colorSlice';
export default function ReduxToolkit() {

    const val = useSelector((state)=> state.value );
    const color = useSelector((state)=> state.color);
    console.log(val);

    
    const dispatch = useDispatch()

    const increment = ()=> {
      return(
        dispatch(change_value({payload:1}))
      )
    }
    const decrement = ()=> dispatch(change_value({payload:-1}))
    const change_red = ()=>{dispatch(change_color({payload:"red"}))}
    const change_green = ()=>{dispatch(change_color({payload:"green"}))}
console.log("************"+val)
  return (
    <div className='container'> 
        <div className='box'>
            <div className='center' style={{backgroundColor:color}}>
              <button onClick={increment}>increment</button>
              <h1>{val}</h1>
              <button onClick={decrement}>decrement</button>
            </div>
            <div className='lb' onClick={change_red}>Red</div>
            <div className='rb' onClick={change_green}>Green</div>
        </div>
    </div>
  )
}

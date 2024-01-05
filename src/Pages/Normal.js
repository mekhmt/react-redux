import React,{useState} from 'react'
import './Redux.css'
import { useSelector } from 'react-redux'
export default function Normal() {

    const [val, setVal] = useState(100)
    const [color,setColor] = useState('blue')
    const increment = ()=> setVal(val+1)
    const decrement = ()=> setVal(val-1)
    const change_red = ()=>setColor("red")
    const change_green = ()=>setColor("green")

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

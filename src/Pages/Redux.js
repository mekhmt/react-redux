
import './Redux.css'
import {useSelector,useDispatch} from 'react-redux'
function Redux() { 
    const value = useSelector((state)=>{
        return state.value
    })

    const color = useSelector((state)=>state.color);

    const dispatch = useDispatch()
    const increment = ()=>{
        dispatch({
            type :"change_value",
            payload:1
        })
    }

    const decrement = ()=>{
        dispatch({
            type :"change_value",
            payload:-1
        })
    }

    const change_red = ()=>dispatch({type:'change_color',payload:"red"})
    const change_green = ()=>dispatch({type:'change_color',payload:"green"})
  return (
    <div className='container'> 
        <div className='box'>
            <div className='center' style={{backgroundColor:color}}>
              <button onClick={increment}>increment</button>
              <h1>{value}</h1>
              <button onClick={decrement}>decrement</button>
            </div>
            <div className='lb' onClick={change_red}>Red</div>
            <div className='rb' onClick={change_green}>Green</div>
        </div>
    </div>
  )
}

export default Redux;

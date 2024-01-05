import React from 'react'
import { BrowserRouter, Routes,Route,NavLink} from 'react-router-dom'
import Home from './Pages/Home'
import Counter from './Pages/Counter'
import Redux from './Pages/Redux'
import './Broute.css'
import ReduxToolkit from './Pages/ReduxToolkit'
import Normal from './Pages/Normal'
import ReducerCounter from './Pages/ReducerCounter'
export default function Broute() {
  return (
    <BrowserRouter>
    <nav className='navbar'>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/counter'}>CouterClass</NavLink></li>
            <li><NavLink to={'/normal'}>NormalFunction</NavLink></li>
            <li><NavLink to={'/rcounter'}>ReducerCounter</NavLink></li>
            <li><NavLink to={'/redux'}>Redux</NavLink></li>
            
            <li><NavLink to={'/reduxtoolkit'}>ReduxToolkit</NavLink></li>
        </ul>
    </nav>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='counter' element={<Counter/>}/>
        <Route path='normal' element = {<Normal/>}/>
        <Route path='redux' element={<Redux/>}/>
        <Route path='rcounter' element={<ReducerCounter/>}/>
        <Route path='reduxtoolkit' element={<ReduxToolkit/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

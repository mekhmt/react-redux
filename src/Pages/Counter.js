import React, { Component } from 'react'
import './Redux.css'
export default class Counter extends Component {
  constructor(props){
    super(props);

    this.state ={
      val:0,
      color:"blue"
    }
  }

  increment = ()=> this.setState({val:this.state.val+1});
  decrement = ()=> this.setState({val:this.state.val-1});
  change_red = ()=> this.setState({color:"red"})
  change_green = ()=> this.setState({color:"green"})
  render() {
    return (
      <div className='container'> 
        <div className='box'>
            <div className='center' style={{backgroundColor:this.state.color}}>
              <button onClick={this.increment}>increment</button>
              <h1>{this.state.val}</h1>
              <button onClick={this.decrement}>decrement</button>
            </div>
            <div className='lb' onClick={this.change_red}>Red</div>
            <div className='rb' onClick={this.change_green}>Green</div>
        </div>
    </div>
    )
  }
}


import React, { Component } from 'react';
import logo from './logo.svg';
import './Components/Styles';
import Main from './Components/Main'

class App extends Component{
  constructor(){
    super()

    this.state = {
      list: []
    }
  }



  render(){
    return (
      <div className="App">
        <h1>Home</h1>
        <div>{this.state.list}</div>
        <button onClick=''>Previous</button>
        <button onClick=''>Next</button>
      </div>
    )
  }
}

export default App;

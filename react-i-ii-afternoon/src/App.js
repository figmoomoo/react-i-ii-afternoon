import React, { Component } from 'react';
import logo from './logo.svg';
import './Components/Styles.css';
import Main from './Components/Main'
import Buttons from './Components/Buttons';
import data from './Components/Data';

class App extends Component{
  constructor(){
    super()

    this.state = {
      data: data,
      index: 0
    }
    this.nextFn = this.nextFn.bind(this)
    this.previousFn = this.previousFn.bind(this)
  }

  nextFn(){
    if(this.state.index === this.state.data.length - 1){
      this.setState({index: 0})
    }else{
      this.setState({index: this.state.index + 1})
    }
  }

  previousFn(){
    if(this.state.index === 0){
      this.setState({index: this.state.data.length - 1})
    }else{
      this.setState({index: this.state.index - 1})
    }
  }

  render(){
    return (
      <div className="App">
        <div className="header">
          <h2>Home</h2>
        </div>
        <Main person={this.state.data[this.state.index]}/>
        <Buttons buttonNext={this.nextFn} buttonPrevious={this.previousFn}/>
      </div>
    )
  }
}

export default App;

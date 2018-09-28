import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gamie from './components/Gamie'


class App extends Component {
  // constructor() {
  //   super();
  //   this.toggleActivation = this.toggleActivation.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  // }
  //destructuring var activated and name into one object state
          state = {
            activated: false,
            name : ''
          };

  toggleActivation = () => {
    //assigning activated to the state object same way you assign a class to a variable
    const {activated} = this.state

    // if (activated) {
    //   this.setState({ activated: !activated });
    // } else {
    //   this.setState({ activated: !activated});
    // }
    //using template literals to write an if statement
    //check if activated is true
    activated
    //set state.activated as false
    ? this.setState({activated: false})
    //else set state.activated as true
    : this.setState({activated: true})
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  }
  render() {
    const {activated, name} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome{
            name.length
            ? `, ${name}`
            : ""
            }</h1>
        </header>

        <input type="text" onChange={this.handleChange} placeholder="Your name" />
        <p></p>
        <div>
          <button onClick={this.toggleActivation}>Toggle Gamie Code</button>
          <p></p>
          {activated && name.length 
            ? <Gamie  name={name} /> 
            : <div>Gamie Code: Deactivated</div>
          }
        </div>
        
      </div>
    );
  }
}

export default App;

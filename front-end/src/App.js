import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
  };
  // This is important, it must match the name of the arrow functions below
  // It sets the interval time to refesh the data of the function
  componentDidMount() {
    setInterval(this.hello, 250)
  }
  // This function tells what url to fetch the data from. 
  hello = () => {
    fetch('api/hello')
      .then(response => response.text())
      .then(message => {
        this.setState({ message: message })
      })
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.message}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;

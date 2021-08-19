import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="numbering"> 01. reactStart</h1>
        <h1 className="title">React Start!</h1>
        <h2> learn react</h2>

        <br></br>
        <hr></hr>
        <h1 className="numbering">02 reactSample</h1>
        <div>
          <img className="App-logo " src="/logo.png" />
          <p style={{fontSize:50}}> Hello! </p>
        </div>
      </div>
    );
  }
}

export default App;

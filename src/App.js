import React, { Component } from 'react';
import './App.css';
import TodaysPlan from './03TodoPlan/TodaysPlan';

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
          <img className="App-logo " src="/logo.png" alt="logo" />
          <p style={{ fontSize: 50 }}> Hello! </p>
        </div>

        <br></br>
        <hr></hr>
        <div className="todaysPlan">
          <h1 className="numbering">03 import _ Component</h1>
          <TodaysPlan />
        </div>
      </div>
    );
  }
}

export default App;

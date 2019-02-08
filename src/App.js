import React, { Component } from 'react';
import './App.css';

const Intro = (props) => (
  <p className="App-intro">
    Our first functional component
  </p>
);
class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Intro/>
      </div>
    );
  }
}

export default App;

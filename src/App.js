import React, { Component } from 'react';
import './App.css';
import IntroPanel from './components/IntroPanel'

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <IntroPanel/>
        </div>
    );
  }
}
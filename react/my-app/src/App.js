import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import nl2br from 'react-newline-to-break';

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { HydraAdmin } from '@api-platform/admin';

class App extends Component {
  render() {
    return <HydraAdmin entrypoint="http://127.0.0.1:8000/api" />
  }
}

export default App;

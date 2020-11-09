import React from 'react';
import './App.css';
import {configNotification} from './services/configNotification'

function App() {

  configNotification()

  return (
    <div className="App">
    <h1> Hello World </h1>
    </div>
  );
}

export default App;

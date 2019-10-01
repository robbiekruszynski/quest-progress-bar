import React from 'react';
import '../App.css';
import { Line, Circle } from 'rc-progress';
import  Example  from './progress.js';
import Eth from '../img/eth.png';

console.log(Eth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Example>
          </Example>

      </header>
    </div>
  );
}

export default App;

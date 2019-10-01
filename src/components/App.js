import React from 'react';
import '../App.css';
import { Line, Circle } from 'rc-progress';
import { Example } from './progress.js';



function App() {
  return (

    <div className="App">
      <header className="App-header">
      <Example></Example>
          <Line></Line>
      </header>
    </div>
  );
}

export default App;

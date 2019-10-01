import React from 'react';
import '../App.css';
import { Line, Circle } from 'rc-progress';
import { Example } from './progress.js';



function App() {
  return (

    <div className="App">
      <header className="App-header">
          <Line></Line>
          <Example></Example>
      </header>
    </div>
  );
}

export default App;

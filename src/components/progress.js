import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';
import Eth from '../img/eth.png';

class Example extends Component {
  constructor() {
    super();
    this.state = {
      percent: 10,
      color: '#58B3AE',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    const colorMap = ['#58B3AE', '#58B3AE', '#58B3AE'];
    const value = parseInt(Math.random() * 100, 10);
    this.setState({
      percent: value,
      color: colorMap[parseInt(Math.random() * 3, 10)],
    });
  }

  render() {
    const { percent, color } = this.state;
    const containerStyle = {
      width: '1000px',
    };

    return (
      <div>
        <div className = "container">
        <h3>Progress {percent}%</h3>
        <img className ="logo-img" src = { Eth } />
        <div style={containerStyle}>
        <Line percent={percent} strokeWidth="10" strokeColor={color} />

        </div>
        <p>
          <button type="button" onClick={this.changeState}>
            Progress
          </button>
        </p>
        </div>
      </div>
    );
  }
}


export default Example;

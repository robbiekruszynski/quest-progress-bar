import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';

class Example extends Component {
  constructor() {
    super();
    this.state = {
      percent: 30,
      color: '#3FC7FA',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
    const value = parseInt(Math.random() * 100, 10);
    this.setState({
      percent: value,
      color: colorMap[parseInt(Math.random() * 3, 10)],
    });
  }

  render() {
    const { percent, color } = this.state;
    const containerStyle = {
      width: '250px',
    };
    return (
      <div>
        <h3>Line Progress {percent}%</h3>
        <div style={containerStyle}>
          <Line percent={percent} strokeWidth="4" strokeColor={color} />
          <Line
            percent={[percent / 2, percent / 2]}
            strokeWidth="4"
            strokeColor={[color, '#CCC']}
          />
        </div>
        <p>
          <button type="button" onClick={this.changeState}>
            Change State
          </button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('__react-content'));

export default Example;

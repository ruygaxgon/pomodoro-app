import React, { Component } from 'react';
import Button from './Button.js';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonState: "Start"
        };
        this.changeButtonState = this.changeButtonState.bind(this);
    }

    changeButtonState() {
        let tempState = "Start";
        if(this.state.buttonState === "Start") {
            tempState = "Stop";
        }

        this.setState({
            buttonState: tempState
        });
    }

  render() {
    return (
      <div>
        <Button buttonState={this.state.buttonState} onClick={this.changeButtonState} />
        <p>Stop button? //have to check design</p> 
        <p>25:00 //time countdown?</p>
        <p>//Make list of tasks with timers?</p>
      </div>
    );
  }
}

export default Timer;

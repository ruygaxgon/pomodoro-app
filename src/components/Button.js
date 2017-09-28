import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const state = e.target.value;
        this.props.onClick(state);
    }

  render() {
    return (
      <div className="ButtonDiv" >
        <button className="Button" type="button" onClick={this.handleClick} >
            {this.props.buttonState}
        </button>
      </div>
    );
  }
}

export default Button;
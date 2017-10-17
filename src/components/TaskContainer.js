import React, { Component } from 'react';
import { CardColumns, Button } from 'reactstrap';
import Task from './Task.js';
import './TaskContainer.css';

class TaskContainer extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var newTask = React.createElement(Task);
    this.setState({
      tasks: this.state.tasks.concat(newTask)
    })
  }

  render() {
    return (
      <div>
        <CardColumns>
          {
            this.state.tasks.map(function(item) {
              return item;
            })
          }
        </CardColumns>
        <Button className="Fixedbutton" onClick={this.handleClick} >Add Task</Button>
      </div>
    );
  }
};

export default TaskContainer;
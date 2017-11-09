import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import Task from './taskComponent/Task.js';
import AddTask from './taskComponent/AddTask.js';

class TaskContainer extends Component {
  constructor() {
    super();

    this.state = {
      task: { uuid: "", description: "", title: ""},
      description: ""
    }
    
    this.addNewTask = this.addNewTask.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  addNewTask(newTask) {
    this.setState({
        task: newTask
    });
    console.log(this.state.task)
  }

  refresh(updatedTask) {
    this.setState({
      task: updatedTask
    });
  }

  render() {
      const component = this;
      return <div className="Content" >
        <CardColumns>
            {
              this.state.task !== {} ? null : <Task key={this.state.task.uuid} content={this.state.task} refresh={component.refresh}/>
            }
        </CardColumns>
        <AddTask addNewTask={this.addNewTask} />
      </div>
  }
};

export default TaskContainer;
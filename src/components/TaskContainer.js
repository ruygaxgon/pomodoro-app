import React, { Component } from 'react';
import Task from './taskComponent/Task.js';
import AddTask from './taskComponent/AddTask.js';

class TaskContainer extends Component {
  constructor() {
    super();

    this.state = {
      task: { description: "", title: "" }
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
      let task = null;
      let addTask = <AddTask addNewTask={this.addNewTask} />;
      if(this.state.task.description !== "" && this.state.task.title !== null) {
        task = <Task content={this.state.task} refresh={component.refresh} />;
        addTask = null;
      }
      return <div className="Content" >
        { task }
        { addTask }
      </div>
  }
};

export default TaskContainer;
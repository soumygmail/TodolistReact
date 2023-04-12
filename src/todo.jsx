import React, { Component } from 'react';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: [],
      showCompletedTasks: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ task: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { task, tasks } = this.state;
    if (task.trim() !== '') {
      this.setState({ tasks: [...tasks, task], task: '' });
    }
  }

  handleCheckboxChange = () => {
    this.setState({ showCompletedTasks: !this.state.showCompletedTasks });
  }

  render() {
    const { task, tasks, showCompletedTasks } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={task}
            onChange={this.handleInputChange}
            placeholder="Enter task"
          />
          <button type="submit">Add Task</button>
        </form>
        <div>
          <input
            type="checkbox"
            checked={showCompletedTasks}
            onChange={this.handleCheckboxChange}
          />
          Show completed tasks
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        {showCompletedTasks && (
          <div>
            <h3>Completed Tasks</h3>
            <p>No completed tasks yet.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Todolist;

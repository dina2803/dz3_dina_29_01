import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  createTodo = () => {
    if (this.state.newTask === "") {
      alert("Пустую строку нельзя создать");
      return;
    } else {
      const tasks = this.state.tasks.slice();
      tasks.push(this.state.newTask);
      this.setState({ tasks, newTask: "" });
    }
  }

  render() {
    return (
        <div>
          <h1>Todo list</h1>
          <input
              type="text"
              value={this.state.newTask}
              onChange={(event) => this.setState({ newTask: event.target.value })} //подглядела в интернете, не знаю можно ли так
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.createTodo();
                }
              }}
          />
          <button onClick={this.createTodo}>Add Task</button>
          <ul>
            {this.state.tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
    );
  }
}

export default App;


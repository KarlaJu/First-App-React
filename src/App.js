import React, { Component } from 'react';
import Welcome from './Welcome.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "This title is from the state",
      tasks: ["Task 1", "Task 2"]
    }
  }
  render() {
    const style = 'active';
    const title = 'Hello World';
    const numbers = ["one", "two", "three"];
    const names = ["Alice", "Eli", "Irving"];
    return (
      <div className={style} align="center">
        <h1>{title}</h1>
        <h2>{this.state.title}</h2>
        <button onClick={this.changeTitle.bind(this)}>Change the title of the state </button>
        {names.map(name =>
          <Welcome name={name}/>
          )}
        <h1 align="left">List of elements form array</h1>  
        <ul align="left">
          {numbers.map((number) =>
            <li>{number}</li>
          )}
        </ul>
        <h1 align="left">States</h1>
        <ul align="left">
          {this.state.tasks.map(task =>
            <li>{task}</li>
          )}
        </ul>
        <button align="left" onClick={this.addTask.bind(this)}>Add new element</button>
        <button onClick={this.updateTask.bind(this)}>Change second task</button>

      </div>
    );
  }
//La inmutabilidad hace que se creen nuevos objetos en lugar de modificar los originales
  changeTitle(){
    this.setState({
      title: "Este es el nuevo titulo del estado"
    });
  }
  addTask() {
    this.setState({
      tasks:this.state.tasks.concat("New element")
    });
  }
  updateTask(){
    const index = this.state.tasks.findIndex(task =>
      task === "Task 2"
    );

   // this.setState({
   //   tasks: this.state.map((task,i) =>
   //   i === index ? "Updated": task
   //   )
   // })
    const tasks = this.state.tasks;
    this.setState({
      
      tasks: [
        ...tasks.slice(0, index),
        "Actualizado",
        ...tasks.slice(index + 1)
      ]
    })
  }
}

export default App;

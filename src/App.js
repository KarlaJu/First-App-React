import React, { Component } from 'react';
import Welcome from './Welcome.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      title: "This title is from the state",
      tasks: ["Task 1", "Task 2"],
      terms: false
    }
  }
  render() {
    const style = 'active';
    const title = 'Hello World';
    const numbers = ["one", "two", "three"];
    const names = ["Alice", "Eli", "Irving"];
    return (
      <div className={style} >
        <h1>{title}</h1>
        <h2>{this.state.title}</h2>
        <button onClick={this.changeTitle.bind(this)}>Change the title of the state </button>
        {names.map(name =>
          <Welcome name={name}/>
          )}
        <h1>List of elements form array</h1>  
        <ul>
          {numbers.map((number) =>
            <li>{number}</li>
          )}
        </ul>
        <h1>States</h1>
        <ul>
          {this.state.tasks.map(task =>
            <li>{task}</li>
          )}
        </ul>
        <button onClick={this.addTask.bind(this)}>Add new element</button>
        <button onClick={this.updateTask.bind(this)}>Change second task</button>
        <h1>Forms</h1>
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}/>
        <button onClick={this.sayHi.bind(this)}>Say hi!</button>
        <h3>Checkbox Example</h3>
        <label>
          <input type="checkbox" checked={this.state.terms} onClick={this.updateTerms.bind(this)}/>I accept the terms
        </label>
      </div>
    );
  }
//La inmutabilidad hace que se creen nuevos objetos en lugar de modificar los originales
  changeTitle(){
    this.setState({
      title: "Este es el nuevo título del estado"
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
        "Updated",
        ...tasks.slice(index + 1)
      ]
    })
  }
  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  sayHi() {
    if(this.state.terms){
      alert('Hello ' + this.state.name);
    } else {
      alert("You must accept the terms");
    }
  }

  updateTerms(event) {
    this.setState({
      terms: event.target.checked
    })
  }
  
}

export default App;

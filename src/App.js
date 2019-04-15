import React, { Component } from 'react';
import Welcome from './Welcome.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "This title is from the state"
    }
  }
  render() {
    const style = 'active';
    const title = 'Hello World';
    const numbers = ["one", "two", "three"];
    const names = ["Alice", "Eli", "Irving"];
    return (
      <div className={style}>
        <h1>{title}</h1>
        <h2>{this.state.title}</h2>
        <button onClick={this.changeTitle.bind(this)}>Change the title of the state </button>
        {names.map(name =>
          <Welcome name={name}/>
          )}
        <ul>
          {numbers.map((number) =>
            <li>{number}</li>
          )}
        </ul>
      </div>
    );
  }

  changeTitle(){
    this.setState({
      title: "Este es el nuevo titulo del estado"
    });
  }
}

export default App;

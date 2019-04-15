import React, { Component } from 'react';
import Welcome from './Welcome.js';

class App extends Component {
  render() {
    const style = 'active';
    const title = 'Hola Mundo';
    const numbers = ["one", "two", "three"];
    const names = ["Alicia", "Eli", "Irving"];
    return (
      <div className={style}>
        <h1>{title}</h1>
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
}

export default App;

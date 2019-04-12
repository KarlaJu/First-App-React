import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = 'active';
    const title = 'Hola Mundo';
    const numbers = ["one", "two", "three"];
    return (
      <div className={style}>
        <h1>{title}</h1>
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

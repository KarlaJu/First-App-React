import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = 'active';
    const title = 'Hola Mundo';
    return (
      <div className={style}>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {render} from 'react-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <p>Hello World !</p>
      </div>
    )
  }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);
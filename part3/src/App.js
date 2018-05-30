import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Ract app</h1>
          <Person name="Tolik" age="12"/>
          <Person name="NeTolik" age="22">Hobby: Racing</Person>
          <Person name="TochnoNeTolik" age="23"/>
      </div>
    );
  }
}

export default App;

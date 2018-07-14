import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state = {
    persons : [
        { id : '1', name: 'Tolik', age: 12},
        { id : '2', name: 'NeTolik', age: 22},
        { id : '3', name: 'TochnoNeTolik', age: 23},
    ],
      showPersons : false
  };



  nameChangeHandler = ( e, id ) =>{

      const personIndex = this.state.persons.findIndex(p => {
         return p.id === id;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = e.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;


      this.setState({ persons : persons });
  };

  togglePersonsHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});

  };

  deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons : persons });
  };

  render() {

      let persons = null;

      if( this.state.showPersons ){
          persons = 
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
      }
    return (
      <div className="App">
            <Cockpit clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;

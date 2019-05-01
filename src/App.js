import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 29 }
    ],
    showPersons: false
  }

  switchHandler = (newName) => {
    // DO NOT USE THIS: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 29 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 29 }
      ]
    })
  }

  tagglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>)
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    }

    return (
      <div className="App" >
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button
          onClick={this.tagglePersonsHandler}
          style={style}
        >Toggle persons!</button>
        {persons}
      </div>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;

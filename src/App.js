import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Max', age: 29 },
      { id: 1, name: 'Manu', age: 29 },
      { id: 2, name: 'Stephanie', age: 29 }
    ],
    showPersons: false
  }

  deletePersonhandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons })
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonhandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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

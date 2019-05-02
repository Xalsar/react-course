import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, { StyleRoot } from 'radium'

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

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

      style.backgroundColor = 'red'
      style[':hover'].backgroundColor = 'purple'
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App" >
          <h1>Hi, I'm a React app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            onClick={this.tagglePersonsHandler}
            style={style}
          >Toggle persons!</button>
          {persons}
        </div>
      </StyleRoot>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default Radium(App);

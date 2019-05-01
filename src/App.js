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
        {this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchHandler.bind(this, "Maximilian")}
              changed={this.nameChangedHandler}>
              My Hobbies: Racing
        </Person>
            <Person
              // DO NOT USE THIS: passing with anonymous functions is inefficient
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={() => this.switchHandler("Maxiii!")} />
          </div>
          : null
        }
      </div>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 29 }
    ]
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
          onClick={this.switchNameHandler}
          style={style}
        >Switch Names!</button>
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
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;

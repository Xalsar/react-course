import React, { Component, Fragment } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props) {
    super(props)

    // Could be initialized ourtside
    this.state = {
      persons: [
        { id: 0, name: 'Max', age: 29 },
        { id: 1, name: 'Manu', age: 29 },
        { id: 2, name: 'Stephanie', age: 29 }
      ],
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    }

    console.log('[App.js] constructor')
  }
  // state = {
  //   persons: [
  //     { id: 0, name: 'Max', age: 29 },
  //     { id: 1, name: 'Manu', age: 29 },
  //     { id: 2, name: 'Stephanie', age: 29 }
  //   ],
  //   showPersons: false
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
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

    this.setState((prevState, props) => ({
      persons,
      changeCounter: prevState.changeCounter + 1
    }))
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  logInHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonhandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
      />
    }

    return (
      <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.logInHandler }}>
        <Fragment>
          <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove cockpit</button>
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
            : null}
          {persons}
        </Fragment>
      </AuthContext.Provider>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default withClass(App, classes.App);

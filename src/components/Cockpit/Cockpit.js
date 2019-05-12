import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http requests
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    // Http requests
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })

  let btnClass = ''
  const assignedClasses = []

  if (props.showPersons) {
    btnClass = classes.Red
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle persons!</button>
    </div>)
}

export default Cockpit
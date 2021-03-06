import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http requests
    toggleBtnRef.current.click()
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    const timer = setTimeout(() => { })
    return () => {
      clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })

  let btnClass = ''
  const assignedClasses = []

  if (props.showPersons) {
    btnClass = classes.Red
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle persons!
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>)
}

export default React.memo(Cockpit)
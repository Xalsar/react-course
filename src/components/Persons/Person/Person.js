import React, { Fragment } from 'react'
// import styles from './Person.module.css'

const person = (props) => {
    console.log('[Person.js] rendering...')

    return (
        <Fragment>
            <p onClick={props.click}>I'm {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Fragment>
    )
}

export default person
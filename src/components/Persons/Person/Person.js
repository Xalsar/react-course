import React from 'react'
import Aux from '../../../hoc/Aux'
// import styles from './Person.module.css'
const person = (props) => {
    console.log('[Person.js] rendering...')

    return (
        <Aux>
            <p onClick={props.click}>I'm {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux>
    )
}

export default person
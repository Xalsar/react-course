import React, { Fragment } from 'react'
import withCass from '../../../hoc/withClass'
import styles from './Person.module.css'
import PropTypes from 'prop-types'

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

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withCass(person, styles.Person)
import React, { Fragment, Component } from 'react'
import withCass from '../../../hoc/withClass'
import styles from './Person.module.css'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    // componentDidMount() {
    //     this.inputElement.focus()
    // }
    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        console.log('[Person.js] rendering...')

        return (
            <Fragment>
                {this.context.authenticated ? (
                    <p>Authenticated</p>
                ) : (
                        <p>please log in again!</p>
                    )}
                <p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl)=>{this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withCass(Person, styles.Person)
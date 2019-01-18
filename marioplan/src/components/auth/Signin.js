import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Sign in</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} type="email" id="email" />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} type="password" id="password" />
            </div>
            <div className="input-field">
                <button className="btn btn-pink lighten-1 z-depth-0">
                    Login
                </button>
                { this.props.authError && <div className="">{this.props.authError}</div> }
            </div>
        </form>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    authError: state.auth.authError
  }
}, { signIn })(Signin)

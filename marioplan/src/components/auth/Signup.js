import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class Signup extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    componentDidMount() {
      if(this.props.uid){
        this.props.history.push('/')
      }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }
  render() {

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Sign up</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} type="email" id="email" />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} type="password" id="password" />
            </div>
            <div className="input-field">
                <label htmlFor="lastName">LastName</label>
                <input onChange={this.handleChange} type="text" id="lastName" />
            </div>
            <div className="input-field">
                <label htmlFor="firstName">firstName</label>
                <input onChange={this.handleChange} type="text" id="firstName" />
            </div>
            <div className="input-field">
                <button className="btn btn-pink lighten-1 z-depth-0">
                    Sign Up
                </button>
                <div className="red-text center">
                  <p>{this.props.authError && this.props.authError}</p>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default connect((state) => ({
  uid: state.firebase.auth.uid,
  authError: state.auth.authError
}), { signUp })(Signup)

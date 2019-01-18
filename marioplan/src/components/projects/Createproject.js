import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Create new project!</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input onChange={this.handleChange} type="text" id="title" />
            </div>
            <div className="input-field">
                <label htmlFor="content">Project Content</label>
                <textarea id="content" onChange={this.handleChange} className="materialize-textarea">

                </textarea>
            </div>
            <div className="input-field">
                <button className="btn btn-pink lighten-1 z-depth-0">
                    Create
                </button>
            </div>
        </form>
      </div>
    )
  }
}


export default connect((state) =>({
    state
}), { createProject })(CreateProject)

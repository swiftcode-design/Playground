import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props
    const authuid = props.auth.uid

    return (
      <Route
        {...props}
        render={props => (
          authuid ?
            <Component {...props} /> :
            <Redirect to='/signin' />
        )}
      />
    )
  }
}

export default connect(({firebase}) =>(firebase),{})(ProtectedRoute);

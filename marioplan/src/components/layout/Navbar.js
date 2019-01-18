import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks'
import SignedoutLinks from "./SignedoutLinks";
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const Navbar = ({ signOut, auth, profile }) => {
    return (
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">MarioPlan</Link>
          { auth.uid ?
            <SignedinLinks profile={profile} signOut={signOut}/>
          :
            <SignedoutLinks/>
          }
          </div>
        </nav>
    )
}

export default connect((state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}, { signOut })(Navbar)

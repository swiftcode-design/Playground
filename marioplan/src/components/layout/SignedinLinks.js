import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedinLinks({ signOut, profile }) {
  console.log('profile', profile)
  return (
    <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li onClick={ signOut }><NavLink to="/">Log Out</NavLink></li>
        <li>
            <NavLink to="/" className="btn btn-floating pink lighten-1">
              {profile.isLoaded && profile.firstName[0] + profile.lastName[0] }
            </NavLink>
        </li>
    </ul>
  )
}

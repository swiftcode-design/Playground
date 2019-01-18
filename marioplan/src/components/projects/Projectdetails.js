import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
function Projectdetails({project}) {

  if(project) {
    console.log('project ', project)
    return (
      <div className="container project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">{ project.title }</span>
                  { project.content }
              </div>
              <div className="card-action gret lighten-4 grey-text">
                  <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                  {moment(project.createdAt.toDate()).calendar()}
              </div>
          </div>
      </div>
    )
  }
  return (
    <div className="container center">
      <p>Loading project.....</p>
    </div>
  )
}

export default compose(
  connect((state, props) => {
    const id = props.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null

    return {
      project: project
    }
  }),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Projectdetails)

import React from 'react'
import Projectsummary from "./Projectsummary";
import { Link } from 'react-router-dom'

export default function Projectlist({projects}) {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return <Link key={project.id} to={`/project/${project.id}`}>
          <Projectsummary project={project} />
        </Link>
      })}
    </div>
  )
}

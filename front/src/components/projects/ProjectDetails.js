import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit rerum obcaecati ipsa perspiciatis earum architecto fugit deserunt dolores eaque atque laborum et molestias, sunt tempore fuga? Mollitia beatae nesciunt tempore.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text"><div>Posted By Alice Casadei</div>
          <div>Aprile 2020</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

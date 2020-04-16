import React from 'react'

function ProjectSummary({project}) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    <p>{project.title}</p>
                    <p className="grey-text">3rd September, 2am</p>
                </span>
            </div>
        </div>
    )
}

export default ProjectSummary

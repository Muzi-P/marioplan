import { connect } from "react-redux";
import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

const ProjectList = ({ projects, auth }) => {
    
    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <Link to={`/project/${project.id}`}>
                        <ProjectSummary key={project.id} project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProjectList)
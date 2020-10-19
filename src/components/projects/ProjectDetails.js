import React from 'react';

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title - {id}</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusantium, non sint consequuntur ullam quia.</p>
                </div>
                <div className="card-action great lighten-4 grey-text">
                    <div>Posted by Doug</div>
                    <div>19th October 2020</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
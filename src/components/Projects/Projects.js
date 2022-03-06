import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../projects.json';
import './Projects.css'
import uuid from 'react-uuid';


function Projects() {
	return (
		<>
			<div className='component t'>
				<h2>Projects</h2>
				<div className='projects'>
					{projects.map((project) => {
						return <ProjectCard project={project} key={uuid()} />;
					})}
				</div>
			</div>
		</>
	);
}

export default Projects;
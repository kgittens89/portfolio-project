import React from 'react';
import flow from '../../assets/flow.png';
import spaceman from '../../assets/spaceman-winner.jpeg';
import cook from '../../assets/Main.png';
import './Projects.css'

function Projects() {
	return (
		<>
			<h2>Projects</h2>
			<div className='projects'>
				<a
					href='https://kgittens89.github.io/spaceman-Game/'
					target='_blank'
					rel='noreferrer'>
					<img src={spaceman} alt='Spaceman Game' />
					<h4>Spaceman Game</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, optio. Eos quod reiciendis autem corporis?
					</p>
				</a>
				<a
					href='https://clever-montalcini-9e14ea.netlify.app/'
					target='_blank'
					rel='noreferrer'>
					<img src={flow} alt='The Flow Factory' />
					<h4>The Flow Factory</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, optio. Eos quod reiciendis autem corporis?
					</p>
				</a>
				<a
					href='https://lets-cook-guys.netlify.app/'
					target='_blank'
					rel='noreferrer'>
					<img src={cook} alt="Let's Cook" />
					<h4>Let's Cook</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, optio. Eos quod reiciendis autem corporis?
					</p>
				</a>
			</div>
		</>
	);
}

export default Projects;
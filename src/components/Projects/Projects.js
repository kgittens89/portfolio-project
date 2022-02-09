import React from 'react';
import flow from '../../assets/flow.png';
import spaceman from '../../assets/spaceman-winner.jpeg';
import cook from '../../assets/Main.png';
import './Projects.css'

function Projects(props) {
    return (
			<div className='projects'>
				<a
					href='https://kgittens89.github.io/spaceman-Game/'
					target='_blank'
					rel='noreferrer'>
					<img src={spaceman} alt='Spaceman Game' />
					<p>Spaceman Game</p>
				</a>
				<a
					href='https://clever-montalcini-9e14ea.netlify.app/'
					target='_blank'
					rel='noreferrer'>
					<img src={flow} alt='The Flow Factory' />
					<p>The Flow Factory</p>
				</a>
				<a
					href='https://lets-cook-guys.netlify.app/'
					target='_blank'
					rel='noreferrer'>
					<img src={cook} alt="Let's Cook" />
					<p>Let's Cook</p>
				</a>
			</div>
		);
}

export default Projects;
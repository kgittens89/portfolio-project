/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './AboutMe.css';
import womanCoding from '../../assets/modern-young-woman-sitting-on-260nw-1928965898.jpeg';
import keisha from '../../assets/Keisha.jpeg'
import haddrick from '../../assets/Haddrick.jpeg'
import louvre from '../../assets/Louvre.JPG'
import sorting from '../../assets/SortingHat.jpeg'
import travel from '../../assets/traveling-black-woman.jpeg'
import meditate from '../../assets/meditate-black-woman.jpeg'
import dancing from '../../assets/dancing-black-woman.png'
import roscoe from '../../assets/Roscoe.jpeg'
import yellow from '../../assets/YellowShirt.jpg'

import { Tooltip } from '@mui/material';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaPython, FaBootstrap } from 'react-icons/fa';
import {
	SiMongodb,
	SiPostgresql,
	SiDjango,
	SiTypescript,
} from 'react-icons/si';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function AboutMe() {
	const handleDragStart = (e) => e.preventDefault();

	const items = [
		<img src={womanCoding} onDragStart={handleDragStart} role='presentation' />,
		<img src={keisha} onDragStart={handleDragStart} role='presentation' />,
		<img src={travel} onDragStart={handleDragStart} role='presentation' />,
		<img src={louvre} onDragStart={handleDragStart} role='presentation' />,
		<img src={dancing} onDragStart={handleDragStart} role='presentation' />,
		<img src={haddrick} onDragStart={handleDragStart} role='presentation' />,
		<img src={sorting} onDragStart={handleDragStart} role='presentation' />,
		<img src={meditate} onDragStart={handleDragStart} role='presentation' />,
		<img src={roscoe} onDragStart={handleDragStart} role='presentation' style={{objectPosition: 'top'}} />,
		<img src={yellow} onDragStart={handleDragStart} />,
	];

	const Gallery = () => {
		return <AliceCarousel mouseTracking items={items} />;
	};

    return (
			<div className='component about'>
				<h2>About Me</h2>
				<h4>Software Engineer</h4>
			{Gallery()}
				<p>
					Hi there 👋🏾, I'm Keisha, a Software Engineer, with a background in
					healthcare, based out of New Orleans, LA. I've recently completed an
					intense Software Engineering Immersive with General Assembly, and am
					ready to put my new skills to work! I'm a critical thinker with a
					passion for developing creative, easy to understand, solutions to
					complex problems. When I'm not coding, I enjoy travel, yoga,
					epic-adventure games, and curling up with a good book. Want to hear
					more, reach out! I'd love to connect.
				</p>
				<h4>Skills</h4>
				<ul className='skills'>
					<Tooltip title='Javascript'>
						<li>
							<IoLogoJavascript />
						</li>
					</Tooltip>
					<Tooltip title='React'>
						<li>
							<FaReact />
						</li>
					</Tooltip>
					<Tooltip title='Python'>
						<li>
							<FaPython />
						</li>
					</Tooltip>
					<Tooltip title='HTML'>
						<li>
							<IoLogoHtml5 />
						</li>
					</Tooltip>
					<Tooltip title='CSS'>
						<li>
							<IoLogoCss3 />
						</li>
					</Tooltip>
					<Tooltip title='Bootstrap'>
						<li>
							<FaBootstrap />
						</li>
					</Tooltip>
					<Tooltip title='MongoDB'>
						<li>
							<SiMongodb />
						</li>
					</Tooltip>
					<Tooltip title='PostgreSQL'>
						<li>
							<SiPostgresql />
						</li>
					</Tooltip>
					<Tooltip title='Django'>
						<li>
							<SiDjango />
						</li>
					</Tooltip>
					<Tooltip title='Typescript'>
						<li>
							<SiTypescript />
						</li>
					</Tooltip>
				</ul>
				{/* <p>
					Javascript | React | Python | HTML | CSS | Bootstrap | MongoDB |
					Mongoose | Express | Git | Github | CLI | Django | PostgreSQL
				</p> */}
			</div>
		);
}

export default AboutMe;
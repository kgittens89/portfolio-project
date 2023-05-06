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
import mosaic from '../../assets/Keisha-mosaic.png'

import { Tooltip } from '@mui/material';
import {
	IoLogoJavascript,
	IoLogoHtml5,
	IoLogoCss3,
} from 'react-icons/io';
import { FaReact, FaPython, FaBootstrap, FaPhoenixFramework } from 'react-icons/fa';
import { RiVuejsLine } from 'react-icons/ri';
import {
	SiMongodb,
	SiPostgresql,
	SiDjango,
	SiTypescript,
	SiExpress,
	SiMaterialui,
	SiElixir,
} from 'react-icons/si';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function AboutMe() {
	// May possibly use later to show Tooltip based on window size
	// const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

	// const updateMedia = () => {
	// 	setDesktop(window.innerWidth > 650);
	// };

	// useEffect(() => {
	// 	window.addEventListener('resize', updateMedia);
	// 	return () => window.removeEventListener('resize', updateMedia);
	// });

	const handleDragStart = (e) => e.preventDefault();

	const items = [
		<img src={mosaic} onDragStart={handleDragStart} />,
		<img src={womanCoding} onDragStart={handleDragStart} />,
		<img src={keisha} onDragStart={handleDragStart} />,
		<img src={travel} onDragStart={handleDragStart} />,
		<img src={louvre} onDragStart={handleDragStart} />,
		<img src={dancing} onDragStart={handleDragStart} />,
		<img src={haddrick} onDragStart={handleDragStart} />,
		<img src={sorting} onDragStart={handleDragStart} />,
		<img src={meditate} onDragStart={handleDragStart} />,
		<img
			src={roscoe}
			onDragStart={handleDragStart}
			style={{ objectPosition: 'top' }}
		/>,
		<img src={yellow} onDragStart={handleDragStart} />,
	];

	const Gallery = () => {
		return <AliceCarousel mouseTracking items={items} />;
	};

    return (
			<div className='component about accent-font'>
				<h2>About Me</h2>
				<h4>Software Engineer</h4>
				{Gallery()}
				<p>
					<div>
						Hi there 👋🏾, my name is Keisha Gittens, and I'm a software engineer
						with 1 year of professional experience. Before transitioning into
						tech, I worked as a registered nurse for about 8 years, where I
						developed my skills in empathy, communication, and problem-solving.
					</div>
					<div>
						When I'm not coding, I enjoy practicing yoga, traveling, spending
						time with my dog, dancing, attending festivals, and trying new
						restaurants. I'm a firm believer in the importance of self-care and
						encouraging others to prioritize their well-being.{' '}
					</div>{' '}
					<div>
						My passion for technology started when I realized how much it can
						positively impact people's lives, and I'm excited to be a part of
						this ever-evolving industry. As a software engineer, I'm constantly
						learning and pushing myself to improve my skills and create
						innovative solutions for complex problems.{' '}
					</div>{' '}
					<div>
						Thank you for visiting my portfolio, and I look forward to
						connecting with you!
					</div>
				</p>
				<h4>Skills</h4>
				<ul className='skills'>
					<Tooltip title='Elixir' open='true'>
						<li>
							<SiElixir />
						</li>
					</Tooltip>
					<Tooltip title='Phoenix' open='true'>
						<li>
							<FaPhoenixFramework />
						</li>
					</Tooltip>
					<Tooltip title='Javascript' open='true'>
						<li>
							<IoLogoJavascript />
						</li>
					</Tooltip>
					<Tooltip title='React' open='true'>
						<li>
							<FaReact />
						</li>
					</Tooltip>
					<Tooltip title='Vue.js' open='true'>
						<li>
							<RiVuejsLine />
						</li>
					</Tooltip>
					{/* <Tooltip title='Python' open='true'>
						<li>
							<FaPython />
						</li>
					</Tooltip> */}
					{/* <Tooltip title='HTML' open='true'>
						<li>
							<IoLogoHtml5 />
						</li>
					</Tooltip> */}
					<Tooltip title='Express' open='true'>
						<li>
							<SiExpress />
						</li>
					</Tooltip>
					<Tooltip title='MongoDB' open='true'>
						<li>
							<SiMongodb />
						</li>
					</Tooltip>
					{/* <Tooltip title='CSS' open='true'>
						<li>
							<IoLogoCss3 />
						</li>
					</Tooltip> */}
					<Tooltip title='Django' open='true'>
						<li>
							<SiDjango />
						</li>
					</Tooltip>
					<Tooltip title='PostgreSQL' open='true'>
						<li>
							<SiPostgresql />
						</li>
					</Tooltip>
					<Tooltip title='Bootstrap' open='true'>
						<li>
							<FaBootstrap />
						</li>
					</Tooltip>
					<Tooltip title='Material UI' open='true'>
						<li>
							<SiMaterialui />
						</li>
					</Tooltip>
					{/* <Tooltip title='Typescript' open='true'>
						<li>
							<SiTypescript />
						</li>
					</Tooltip> */}
				</ul>
			</div>
		);
}

export default AboutMe;
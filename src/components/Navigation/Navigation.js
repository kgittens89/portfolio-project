import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './Navigation.css';

function Navigation() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		width > 500 ? setNavbarOpen(true) : setNavbarOpen(navbarOpen);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
		//eslint-disable-next-line
	}, [width])

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<nav className='navBar'>
			{width < 600 ?
				<button onClick={handleToggle}>
			{navbarOpen ? <MdClose /> : <FiMenu />}
		</button> : ''
}
				<ul style={{ display: navbarOpen ? 'flex' : 'none' }}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/about'>About Me</Link>
					</li>
					<li>Resume</li>
				</ul>
			</nav>
		);
}

export default Navigation;
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './Navigation.css';
import { Link, animateScroll as scroll } from 'react-scroll';


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
			{width < 600 ? (
				<button onClick={handleToggle}>
					{navbarOpen ? <MdClose /> : <FiMenu />}
				</button>
			) : (
				''
			)}
			<ul style={{ display: navbarOpen ? 'flex' : 'none' }}>
				{/* https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react */}
				<li>
					<Link
						activeClass='active'
						to='home'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						About Me
					</Link>
				</li>
				<li>
					<Link
						activeClass='active'
						to='projects'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<a
						href='https://drive.google.com/file/d/1JugAKtak4NL_Oihlby5oTNujkEqswZvl/view?usp=sharing'
						target='_blank'
						rel='noreferrer'>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './Navigation.css';

function Navigation() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
			setNavbarOpen(!navbarOpen);
		};
    return (
			<nav className='navBar'>
				<button onClick={handleToggle}>
					{navbarOpen ? <MdClose /> : <FiMenu />}
				</button>
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
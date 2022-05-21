import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

import ScrollToTop from 'react-scroll-to-top';
import { styled } from '@mui/material';

const Scroll = styled(ScrollToTop)({
	color: 'rgb(55, 71, 79)',
	backgroundColor: 'rgb(224, 224, 224, 0.7)',
	height: '30px',
	margin: '0 auto',
	position: 'sticky',
	bottom: '7%',
});

function App() {
  return (
		<div className='App'>
			<Navigation />
			<main>
				<Home />
				<AboutMe />
			  <Projects />
			  <Scroll height='20' smooth/>
			</main>
			<Footer />
		</div>
	);
}

export default App;

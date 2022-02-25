import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
		<div className='App'>
			<Navigation />
			<main>
				<Home/>
				<AboutMe/>
				<Projects/>
			</main>
			<Footer />
		</div>
	);
}

export default App;

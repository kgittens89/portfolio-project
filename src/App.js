import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

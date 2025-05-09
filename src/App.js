import React from 'react';
import Component from './Components/Component';
import ErrorBoundary from './Components/ErrorBoundary';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Hero from './Pages/Hero';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Component />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

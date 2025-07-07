import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
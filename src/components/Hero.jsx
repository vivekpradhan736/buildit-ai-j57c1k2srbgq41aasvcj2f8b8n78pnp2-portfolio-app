import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-gray-50 py-24">
      <div className="container mx-auto text-center">
        <img
          src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 mx-auto mb-8 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-blue-700 mb-6">Hello, I'm John Doe <span role="img" aria-label="wave">👋</span></h1>
        <p className="text-xl text-gray-700 mb-12">
          Passionate Web Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
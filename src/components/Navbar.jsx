import React from 'react';
import { Menu, Home } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center text-2xl font-bold text-blue-600">
          <Home className="mr-2" />
          My Portfolio
        </a>

        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
        <button className="md:hidden focus:outline-none">
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
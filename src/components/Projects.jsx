import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
          My Projects <span role="img" aria-label="laptop">💻</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title 1</h3>
              <p className="text-gray-600">Brief description of the project.</p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title 2</h3>
              <p className="text-gray-600">Brief description of the project.</p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title 3</h3>
              <p className="text-gray-600">Brief description of the project.</p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
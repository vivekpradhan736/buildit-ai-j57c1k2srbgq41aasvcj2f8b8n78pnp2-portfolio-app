import React from 'react';
import { Star } from 'lucide-react';

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
          My Skills <span role="img" aria-label="skills">🛠️</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <Star className="mr-2 text-yellow-500" />
              Web Development
            </h3>
            <p className="text-gray-600">HTML, CSS, JavaScript, React, Tailwind CSS</p>
          </div>
          {/* Skill 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <Star className="mr-2 text-yellow-500" />
              Backend Development
            </h3>
            <p className="text-gray-600">Node.js, Express, MongoDB, REST APIs</p>
          </div>
          {/* Skill 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <Star className="mr-2 text-yellow-500" />
              UI/UX Design
            </h3>
            <p className="text-gray-600">Figma, Adobe XD, Wireframing, Prototyping</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
import React from 'react';
import { Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
          Contact Me <span role="img" aria-label="email">📧</span>
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
            >
              Send <Mail className="inline-block ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
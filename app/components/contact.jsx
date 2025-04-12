'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-64 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  )
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div id="contact" className="px-6 mb-24 mt-12 py-20 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <div className="w-16 h-1 bg-teal-500 mx-auto my-4"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Info + Map */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address</h2>
            <p className="text-gray-600 mb-2">Thattankunnu, Thrikkalangode(po), Malappuram</p>
            <p className="text-gray-600">PIN: 676123</p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact</h2>
            <p className="text-gray-600 mb-2">+91 8606648865</p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Email</h2>
            <p className="text-gray-600">ashiquetharakan@gmail.com</p>
          </div>

          <div className="h-64 md:h-80 bg-white rounded-lg shadow-md overflow-hidden">
            <MapComponent />
            <div className="text-center py-2 bg-gray-50">
              <a
                href="https://www.openstreetmap.org/search?query=Thattankunnu%2C%20Thrikkalangode%2C%20Malappuram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800 text-sm font-medium"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium">Subject</label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// Note: You can install lucide-react or use standard SVG icons
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react'; 

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
      <p className="text-gray-400">Loading Map View...</p>
    </div>
  )
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your EmailJS or API logic here
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Get In <span className="text-teal-500">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Ready to start a project or have questions about Odoo customization? I'm just a message away.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Contact Details & Map */}
          <div className="lg:w-5/12 space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {/* Contact Cards */}
              {[
                { icon: <MapPin className="text-teal-500" />, title: "Location", detail: "Thattankunnu, Malappuram, Kerala", sub: "PIN: 676123" },
                { icon: <Phone className="text-teal-500" />, title: "Call Me", detail: "+91 8606648865", sub: "Mon - Sat, 9am - 6pm" },
                { icon: <Mail className="text-teal-500" />, title: "Email", detail: "ashiquetharakan@gmail.com", sub: "Online 24/7" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-teal-500/50 transition-all">
                  <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.detail}</p>
                    <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Container */}
            <div className="relative group rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 h-72">
              <MapComponent />
              <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
              <a
                href="https://www.openstreetmap.org/search?query=Thattankunnu%2C%20Thrikkalangode%2C%20Malappuram"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Open Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-7/12">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                    <input
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border-none focus:ring-2 focus:ring-teal-500 dark:text-white outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border-none focus:ring-2 focus:ring-teal-500 dark:text-white outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                  <input
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border-none focus:ring-2 focus:ring-teal-500 dark:text-white outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border-none focus:ring-2 focus:ring-teal-500 dark:text-white outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
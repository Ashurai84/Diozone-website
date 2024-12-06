import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact-us" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#29524A]">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#29524A] focus:ring-[#29524A]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#29524A] focus:ring-[#29524A]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#29524A] focus:ring-[#29524A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#29524A] text-white py-3 px-6 rounded-md hover:bg-[#1f3d37] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center">
            <a
              href="mailto:support@diazone.com"
              className="inline-flex items-center text-[#29524A] hover:underline"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact us at support@diazone.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
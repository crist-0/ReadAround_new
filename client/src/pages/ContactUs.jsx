import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl p-6">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Contact Us</h1>
        <p className="text-gray-300 mb-4 text-center">
          Have questions or feedback? We'd love to hear from you! Reach out to us through the form below or via our email.
        </p>
        <form className="mt-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input type="text" className="w-full p-2 rounded bg-gray-700 text-white" placeholder="Your Name" />
          
          <label className="block text-gray-300 mt-4 mb-2">Email</label>
          <input type="email" className="w-full p-2 rounded bg-gray-700 text-white" placeholder="Your Email" />
          
          <label className="block text-gray-300 mt-4 mb-2">Message</label>
          <textarea className="w-full p-2 rounded bg-gray-700 text-white" rows="4" placeholder="Your Message"></textarea>
          
          <button type="submit" className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
        <p className="text-gray-300 mt-4 text-center">
          Or email us at <span className="font-semibold text-blue-400">support@readaround.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

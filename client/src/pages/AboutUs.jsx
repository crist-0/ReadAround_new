import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl p-6">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">About ReadAround</h1>
        <p className="text-gray-300 mb-4">
          Welcome to <span className="font-semibold text-blue-400">ReadAround</span>, your go-to platform for book recommendations and reviews! We are passionate about bringing readers together to share insights, discover new books, and celebrate the joy of reading.
        </p>
        <h2 className="text-2xl font-semibold text-white mt-4">Our Mission</h2>
        <p className="text-gray-300 mt-2">
          At ReadAround, we strive to create a vibrant community where book lovers can explore curated recommendations, write and read reviews, and connect over their favorite reads. Our goal is to make book discovery effortless and enjoyable.
        </p>
        <h2 className="text-2xl font-semibold text-white mt-4">What We Offer</h2>
        <ul className="text-gray-300 list-disc list-inside mt-2">
          <li>Personalized book recommendations based on your preferences.</li>
          <li>Community-driven reviews to help you find your next favorite read.</li>
          <li>AI-powered review generation for quick book insights.</li>
          <li>Seamless reading list management to keep track of your must-reads.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mt-4">Join Us</h2>
        <p className="text-gray-300 mt-2">
          Whether you're an avid reader, a casual book lover, or someone looking for their next great read, ReadAround is the perfect place for you. Join our community today and start your journey of literary exploration!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

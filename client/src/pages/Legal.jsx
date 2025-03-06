import React from "react";

const Legal = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl p-6">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Legal Information</h1>
        
        <h2 className="text-2xl font-semibold text-white mt-4">Privacy Policy</h2>
        <p className="text-gray-300 mt-2">
          Your privacy is important to us. ReadAround collects and processes user data in compliance with applicable privacy laws. We do not share your personal data with third parties without your consent. For more details, please review our full Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-4">Licensing</h2>
        <p className="text-gray-300 mt-2">
          All content on ReadAround, including user-generated reviews, is protected under applicable copyright laws. Users must adhere to licensing agreements when sharing or using content from the platform. Unauthorized use of our intellectual property is strictly prohibited.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-4">Terms & Conditions</h2>
        <p className="text-gray-300 mt-2">
          By using ReadAround, you agree to abide by our terms and conditions. Users must provide accurate information, refrain from harmful activities, and respect community guidelines. Violation of our terms may result in account suspension or legal action.
        </p>
      </div>
    </div>
  );
};

export default Legal;

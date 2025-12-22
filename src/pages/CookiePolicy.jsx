import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-gray-600">Effective Date: December 22, 2025</p>
        </div>

        <div className="prose max-w-none">
          <div className="mb-8">
            <p className="text-gray-700 mb-6">
              Tiberius Strategies uses cookies to improve user experience and analyze website performance.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">How Cookies Help Us</h2>
            <p className="text-gray-700 mb-6">
              Cookies help us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Understand website usage</li>
              <li>Improve functionality</li>
              <li>Optimize content</li>
            </ul>

            <p className="text-gray-700">
              You can disable cookies through your browser settings. Continued use of the website implies consent to our cookie usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

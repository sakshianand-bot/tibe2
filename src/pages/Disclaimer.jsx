import React from 'react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">⚠️ Disclaimer</h1>
          <p className="text-gray-600">Effective Date: December 22, 2025</p>
        </div>

        <div className="prose max-w-none">
          <div className="mb-8">
            <p className="text-gray-700 mb-6">
              The information provided on <a href="https://tiberiusstrategies.netlify.app/" className="text-blue-600 hover:underline">https://tiberiusstrategies.netlify.app/</a> is for general informational purposes only.
            </p>
            
            <p className="text-gray-700 mb-6">
              Tiberius Strategies makes no guarantees regarding the accuracy, completeness, or reliability of any information presented. All strategies, recommendations, and insights are provided without warranty of any kind.
            </p>
            
            <p className="text-gray-700">
              Any reliance you place on information from this website is strictly at your own risk. Business results may vary depending on individual circumstances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

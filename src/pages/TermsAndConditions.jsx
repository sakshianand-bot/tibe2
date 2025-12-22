import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600">Effective Date: December 22, 2025</p>
        </div>

        <div className="prose max-w-none">
          <div className="mb-8">
            <p className="text-gray-700 mb-6">
              Welcome to Tiberius Strategies. By accessing or using our website https://tiberiusstrategies.netlify.app/, you agree to comply with and be bound by these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">1. Use of Website</h2>
            <p className="text-gray-700 mb-6">
              You agree to use this website for lawful purposes only and in a way that does not infringe the rights of others or restrict their use of the website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on this website, including text, graphics, logos, and materials, is the property of Tiberius Strategies and may not be copied, reproduced, or distributed without written permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Services Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              Information provided on this website is for general informational purposes only and does not constitute professional, legal, or financial advice. Any engagement for consulting services will be governed by a separate written agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Tiberius Strategies shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              We are not responsible for the content or practices of third-party websites linked from our site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
            <p className="text-gray-700 mb-8">
              These Terms shall be governed and interpreted under the laws of the United States.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: info@tiberiusstrategies.com<br />
                Phone: (555) 123-4567<br />
                Address: 600 1st Ave STE 102, Seattle, WA 98104
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

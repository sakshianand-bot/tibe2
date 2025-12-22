import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            Tiberius Strategies ("we," "our," or "us") respects your privacy and is committed to protecting it through this Privacy Policy. 
            This policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            <a href="https://tiberiusstrategies.netlify.app/" className="text-blue-600 hover:underline">https://tiberiusstrategies.netlify.app/</a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, or other details you voluntarily provide through contact forms or inquiries.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, time spent on pages, and other analytical data.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information collected to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Respond to inquiries and provide requested services</li>
            <li>Improve our website and service offerings</li>
            <li>Communicate updates, insights, or business information (if opted in)</li>
            <li>Maintain website security and performance</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            Our website may use cookies or similar technologies to enhance user experience and analyze website traffic. 
            You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Sharing of Information</h2>
          <p className="mb-4">We do not sell, rent, or trade your personal information. Information may be shared only:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To comply with legal obligations</li>
            <li>With service providers who assist in website operations (under confidentiality agreements)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Security</h2>
          <p className="mb-6">
            We implement reasonable administrative and technical safeguards to protect your information. 
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third-Party Links</h2>
          <p className="mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Rights</h2>
          <p className="mb-6">You may request access, correction, or deletion of your personal data by contacting us.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="mb-2">If you have questions about this Privacy Policy, contact us at:</p>
          <p className="mb-6">
            <a href="mailto:support@tiberiusstrategies.com" className="text-blue-600 hover:underline">
              support@tiberiusstrategies.com
            </a>
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <Link 
            to={ROUTES.PUBLIC.HOME} 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

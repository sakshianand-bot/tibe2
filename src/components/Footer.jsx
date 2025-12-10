import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Tiberius Strategies (DBA Tiberius Management)</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-400" />
              <span>600 1st Ave STE 102, Seattle, WA 98104</span>
            </div>
            
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400" />
              <a href="mailto:Support@TiberiusStrategies.com" className="hover:text-blue-400 transition-colors">
                Support@TiberiusStrategies.com
              </a>
            </div>
            
            <div className="flex items-center">
              <FaPhone className="mr-2 text-blue-400" />
              <a href="tel:1-800-399-0132" className="hover:text-blue-400 transition-colors">
                1-800-399-0132
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p>© {new Date().getFullYear()} Tiberius Strategies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

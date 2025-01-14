import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Guardian News</h2>
            <p className="text-gray-400">
              Your trusted source for breaking news and in-depth journalism.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Top Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Archive
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Newsletter
            </h3>
            <form className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Guardian News. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

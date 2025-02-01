import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {/* Products Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-white mb-4">Products</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400">
                Flutter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                React
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Android
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                iOS
              </a>
            </li>
          </ul>
        </div>

        {/* Design to Code Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-white mb-4">Design to Code</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400">
                Figma Plugin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Templates
              </a>
            </li>
          </ul>
        </div>

        {/* Comparison Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-white mb-4">Comparison</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400">
                Creativity vs Logic
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Tradition vs Modernity
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Knowledge vs Wisdom
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Web vs Mobile
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-white mb-4">Company</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 bg-gray-700 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            Asipiya<span className="text-blue-500">Blog</span>
          </div>
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Asipiya PVT. LTD. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <BsYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Meals on Wheels</h2>
            <p className="text-gray-400">
              Tilak Road, Pune, Maharashtra, 411028
            </p>
            <p className="text-gray-400">Email: pawanrajkadam@gmail.com</p>
            <p className="text-gray-400">Phone: 1234567890</p>
          </div>

          {/* <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div> */}

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-600">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-700">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Meals on wheels. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  flex flex-col justify-center items-center bg-[#f0f8fa] dark:bg-[#10162F] text-center p-6">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mb-4">
        <img
          src="/assets/images/sea1.png"
          alt="Ocean Cleanup Icon"
          className="h-16 w-16 mb-4"
        />
        <h2 className="text-[#2d3748] dark:text-[#e5e7eb] text-3xl font-semibold">
          Ocean Nation
        </h2>
      </div>

      <div className="flex justify-center space-x-6 mb-6">
        {/* Social Media Links */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077b6] dark:text-[#90e0ef] hover:text-[#60A5FA]"
        >
          <FaFacebook size={32} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077b6] dark:text-[#90e0ef] hover:text-[#60A5FA]"
        >
          <FaTwitter size={32} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077b6] dark:text-[#90e0ef] hover:text-[#60A5FA]"
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077b6] dark:text-[#90e0ef] hover:text-[#60A5FA]"
        >
          <FaLinkedin size={32} />
        </a>
      </div>

      <p className="text-[#2d3748] dark:text-[#e5e7eb] text-lg">
        © {new Date().getFullYear()} Ocean Nation Charity Store. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;

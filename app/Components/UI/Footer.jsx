"use client";
import React from "react";
import { font } from "../Font/font";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`${font.className} bg-white pt-12 z-20 relative pb-4 px-4 border-t border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-6 max-sm:w-full">
        <div className="mx-auto grid grid-cols-4 max-md:grid-cols-1 gap-5">
          {/* Left Section */}
          <div className="col-span-1">
            <h2 className="text-4xl md:text-2xl font-semibold text-gray-900 mb-2">
              Let's achieve <span className="text-[#283A64]">excellence</span>
            </h2>
            <p className="text-[#283A64] font-semibold mt-6 mb-6 text-lg">
              Subscribe to our newsletter
            </p>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-full border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 md:w-auto"
              />
              {/* <button
                type="submit"
                className="-ml-8 z-10 bg-[#283A64] rounded-full w-12 h-12 flex items-center justify-center hover:bg-cyan-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10l9-6 9 6M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10"
                  />
                </svg>
              </button> */}
            </form>
            {/* <div className="flex flex-row items-center justify-center gap-x-2 overflow-visible md:justify-normal">
              <img
                src="/footer/Clutch.webp"
                alt="clutch"
                className="w-24 h-24"
              />
              <img
                src="/footer/trust-pilot.webp"
                alt="trustpilot"
                className="w-24 h-24"
              />
              <img
                src="/footer/google.webp"
                alt="google"
                className="w-24 h-24"
              />
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/custom-web-development-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Broadcast
                </a>
              </li>
              <li>
                <a
                  href="/mobile-application-development-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="/social-media-marketing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Live Streaming
                </a>
              </li>
              <li>
                <a
                  href="/digital-marketing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Video On Demand
                </a>
              </li>
              <li>
                <a
                  href="/seo-services-and-strategy"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Post Production
                </a>
              </li>
              <li>
                <a
                  href="/graphics-designing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Migration
                </a>
              </li>
              <li>
                <a
                  href="/professional-video-editing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Archival
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  +971 52 873 9646
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  info@glonect.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Section */}
        

        {/* Social & Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 max-sm:w-full">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            Copyright © 2021-2025 All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

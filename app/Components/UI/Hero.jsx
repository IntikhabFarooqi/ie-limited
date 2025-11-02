"use client";
import React, { useCallback, useState } from "react";
import { font } from "../Font/font";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Data/particlesConfig";
import { headingFont } from "../Font/headingFont";
import ModelStartProjectForm from "./ModalStartProjectForm";
import Link from "next/link";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section
      className={`${font.className} relative h-[44rem] max-md:h-auto md:h-auto bg-white`}
    >
      {/* Particles.js Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="absolute inset-0 z-0"
      />

      <ModelStartProjectForm
        open={showModal}
        onClose={() => setShowModal(false)}
      />

      <div className="relative z-10 w-full mx-auto px-6 lg:pt-10 max-md:flex max-md:flex-col max-md:items-center">
        <div className="grid md:grid-cols-2 gap-6 items-center max-md:items-center max-md:justify-center max-md:text-center max-md:flex">
          {/* Left Content */}
          <div className="text-left space-y-8 max-md:text-center max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <div className="space-y-4 max-md:items-center max-md:text-center max-md:flex max-md:flex-col max-md:mt-6">
              <h1
                className={`${headingFont.className} text-3xl uppercase max-md:text-3xl lg:text-4xl text-[#283a64] leading-tight w-[350px] md:w-[450px]`}
              >
                <span className="text-cyan-400">Expert</span> Technology Services and
                Solutions for
                <br />
                <span className="text-cyan-400"> Integration</span> Services
                {/* <span className="text-cyan-400"> Mobile</span> App Development */}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-md">
                Comprehensive Integration & Tech Solutions
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <div className="flex flex-row items-center gap-x-2">
                <div>
                  <Link href="/contact-us">
                  <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-8 py-2 rounded-full transition-colors duration-200 font-medium text-lg flex items-center space-x-2">
                    <span>Let's Discuss</span>
                  </button>
                  </Link>
                </div>
                <div>
                  <div className="w-12 h-12 custom-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            {/* <div
              className="flex flex-row items-center gap-x-2"
              style={{ marginTop: "-20px" }}
            >
              <img
                src="/footer/Clutch.webp"
                alt="clutch"
                className="md:w-[120px] w-[100px] h-[100px] md:h-[120px]"
              />
              <img
                src="/footer/trust-pilot.webp"
                alt="trustpilot"
                className="md:w-[120px] w-[100px] h-[100px] md:h-[120px]"
              />
              <img
                src="/footer/google.webp"
                alt="google"
                className="md:w-[120px] w-[100px] h-[100px] md:h-[120px]"
              />
            </div> */}
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative max-md:hidden">
            <div className="relative">
              {/* Main Hero Image */}
              <img
                src="/hero.webp"
                alt="Professional working on laptop representing Logic Innovation Solutions"
                className="relative z-10 w-1/2 h-auto max-w-xs mx-auto lg:max-w-md rounded-2xl animate-float"
                style={{
                  animation: 'float 3s ease-in-out infinite'
                }}
              />

              {/* Decorative Elements */}
              <div className="absolute z-20 top-[-2.5rem] right-[10%] md:right-[12%] lg:right-[18%] xl:right-[130px]">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-float-reverse"
                style={{
                  animation: 'float-reverse 3s ease-in-out infinite'
                }}>
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[#283a64]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute z-20 bottom-[-0.5rem] left-[12%] md:left-[18%] lg:left-[70px] xl:left-[70px]">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-float-reverse"
                style={{
                  animation: 'float-reverse 3s ease-in-out infinite'
                }}>
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[#283a64]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>

              {/* Additional decorative dots */}
              <div className="absolute top-1/4 -left-8 hidden lg:block z-20">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/2 -left-4 hidden lg:block z-20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
              </div>
              <div className="absolute bottom-1/4 -left-6 hidden lg:block z-20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
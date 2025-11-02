import React from "react";

export default function ServicesCategory({ className = "", children }) {
  return (
    <div className={`sticky top-8 z-20 ${className}`} style={{ maxHeight: 'calc(100vh - 4rem)' }}>
      <div className="rounded-3xl bg-gradient-to-b from-[#c3c9d6] to-[#b6e6f3] shadow-xl p-8">
        <h3 className="text-2xl font-bold text-[#283A64] mb-4">Services Category</h3>
        <ul className="divide-y divide-[#b0b8c9]">
          <li>
            <a href="/broadcasting" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Broadcasting
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/education" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Education
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/live-streaming" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Live Streaming
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/video-on-demand" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Video On Demand
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/post-production" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Post Production
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/archival" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Archival
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/migration" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Migration
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/it-equipment-and-services" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              IT Equipment & Services
              <span className="ml-2">↗</span>
            </a>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
} 
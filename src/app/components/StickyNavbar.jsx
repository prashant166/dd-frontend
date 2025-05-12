"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGlobeAsia, FaSearch } from "react-icons/fa";

const tabs = [
  { label: "Hotels" },
  { label: "Things to Do" },
  { label: "Restaurants" },
  { label: "Flights" },
  { label: "Holiday Homes" },
  { label: "Forums" },
];

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerOffset = 300;
      setIsVisible(window.scrollY > triggerOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/images/logo.png"
              alt="DailyDilli"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-extrabold text-black">DailyDilli</span>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex items-center w-full max-w-md mx-6 bg-white rounded-full border border-gray-300 px-4 py-2 shadow-sm">
          <FaSearch className="text-gray-400 mr-2" size={16} />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 text-sm outline-none bg-transparent placeholder-gray-500"
          />
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-4">
          {/* Nav Buttons */}
          <div className="hidden md:flex gap-6 text-sm font-semibold text-black">
            {["Discover", "Trips", "Review"].map((label) => (
              <a
                key={label}
                href="#"
                className="relative group pb-1"
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Globe + Sign in */}
          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-1 text-sm text-black">
              <FaGlobeAsia size={14} />
              <span>INR</span>
            </div>
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Tabs */}
      <div className="hidden lg:flex justify-center gap-6 px-4 sm:px-6 pb-3 text-sm font-semibold text-black">

        {tabs.map((tab) => (
          <a
            key={tab.label}
            href="#"
            className="relative group pb-1"
          >
            {tab.label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </div>
  );
}

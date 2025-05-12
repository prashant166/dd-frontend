"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGlobeAsia, FaSearch, FaBed, FaCamera, FaUtensils, FaPlane, FaHome } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Link from 'next/link';

const tabs = [
  { label: "Hotels" },
  { label: "Things to Do" },
  { label: "Restaurants" },
  { label: "Flights" },
  { label: "Holiday Homes" },
  { label: "Forums" },
];

export default function StickyHeader() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const triggerOffset = 300;
  //     setIsVisible(window.scrollY > triggerOffset);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    {/* Top Section */}
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo + Search */}
        <div className="flex items-center gap-6 flex-1">
          {/* Logo */}
          
<Link href="/" className="flex items-center gap-2">
  <div className="relative w-8 h-8">
    <Image
      src="/images/logo.png"
      alt="DailyDilli"
      fill
      className="object-contain cursor-pointer"
    />
  </div>
  <span className="text-lg font-extrabold text-black cursor-pointer">DailyDilli</span>
</Link>

          {/* Search */}
          <div className="hidden md:flex items-center w-full bg-white rounded-full border border-gray-300 px-4 py-2 shadow-sm  max-w-xl truncate">
            <FaSearch className="text-gray-400 mr-2" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 text-sm outline-none bg-transparent placeholder-gray-500"
            />
          </div>
        </div>

        {/* Center - Options */}
        <div className="hidden md:flex gap-6 text-sm font-semibold text-black">
  {["Start a Trip", "Contribute", "About Us"].map((label) => {
    const customRoutes = {
      "Start a Trip": "/trip-planning",
      "Contribute": "/addplace",
    };

    const href = customRoutes[label] || `/${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <a
        key={label}
        href={href}
        className="relative group pb-1"
      >
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
      </a>
    );
  })}
</div>


        {/* Right - Globe and Sign In */}
        <div className="flex items-center gap-4 ml-4">
          {/* <div className="flex items-center gap-1 border-r pr-3 text-sm text-black">
            <FaGlobeAsia size={14} />
            <span>INR</span>
          </div> */}
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold cursor-pointer">
            Sign in
          </button>
        </div>
      </div>

      {/* Bottom Row - Tabs */}
      <div className="hidden lg:flex justify-center gap-6 px-4 sm:px-6 pb-3 text-sm font-semibold text-black">

        {tabs.map((tab) => (
          <button key={tab.label} className="hover:underline hover:text-black transition">
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

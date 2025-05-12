"use client";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaLandmark, FaPaw, FaUtensils, FaTree, FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import Link from "next/link";


const tabs = [
  { label: "Search All", icon: <IoHomeOutline size={18} /> },
  { label: "Historical", icon: <FaLandmark size={18} /> },
  { label: "Pet-Friendly", icon: <FaPaw size={18} /> },
  { label: "Restaurants", icon: <FaUtensils size={18} /> },
  { label: "Adventure", icon: <FaTree size={18} /> },
  { label: "Romantic", icon: <FaHeart size={18} /> },
  { label: "Shopping", icon: <GiShoppingBag size={18} /> },
  { label: "Family", icon: <MdFamilyRestroom size={18} /> },
];

export default function HeroSearchSection() {
  const [activeTab, setActiveTab] = useState("Search All");

  return (
    <section className="text-center mt-16 px-4">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-10">Where to?</h1>



      {/* Tab Selector */}
      <div
  className="flex flex-nowrap overflow-x-auto whitespace-nowrap scrollbar-none gap-6
             md:flex-wrap md:overflow-visible md:whitespace-normal md:justify-center md:gap-8
             text-lg sm:text-base font-semibold text-gray-800 mb-10"
>

  {tabs.map((tab) => (
    <button
      key={tab.label}
      className={`flex items-center gap-2 border-b-2 ${
        activeTab === tab.label
          ? "border-orange-600"
          : "border-transparent hover:border-orange-600"
      } pb-2 transition`}
      onClick={() => setActiveTab(tab.label)}
    >
      {tab.icon}
      {tab.label}
    </button>
  ))}
</div>


      <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
  Don’t know exactly what you’re looking for? Just type what’s on your mind — our AI understands your vibe and mood to suggest the perfect spots. 
  <br />
  <span className="font-semibold text-orange-600">Say goodbye to boring, rigid searches.</span>
</p>

      {/* Search Input */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden px-6 py-4 items-center border border-gray-200">
        <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Places to go, things to do, hotels..."
            className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500"
          />
          <Link href="/search">
  <button className="ml-2 bg-orange-700 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition">
    Search
  </button>
</Link>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4 italic">
  Try: “somewhere calm with art and chai” or “budget-friendly weekend escape”
</p>

    </section>
  );
}

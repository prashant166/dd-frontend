"use client";
import { FaRobot } from "react-icons/fa";

export default function BannerCard() {
  return (
    <section className="flex justify-center mt-16 px-4">
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-md h-[620px]">
        {/* Background Image */}
        <img
          src="/images/banner.png"
          alt="Hotel Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Badge */}
        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
          2025
        </div>

        {/* Right-side AI Button */}
        <div className="absolute top-7/8 right-12 -translate-y-1/2 z-10">
          <button className="flex items-center gap-2 bg-white text-black text-lg font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
          <img
  src="/images/ai-icon.svg"
  alt="AI Logo"
  className="w-5 h-5 object-contain"
/>

            Start a trip with AI
          </button>
        </div>
      </div>
    </section>
  );
}

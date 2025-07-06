"use client";
import { FaRobot } from "react-icons/fa";
import Link from "next/link";

export default function BannerCard() {
  return (
    <section className="flex justify-center mt-16 px-4">
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-md 
  h-[400px] sm:h-[500px] md:h-[620px]">

        {/* Background Image */}
        <img
          src="/images/Banner.png"
          alt="Hotel Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Badge */}
        {/* <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
          2025
        </div> */}

        {/* Right-side AI Button */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12
">
          <Link href="/trip-planning">
         <button className="flex items-center gap-2 bg-white text-black text-sm sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow hover:bg-gray-100 transition">
  <img
    src="/images/ai-icon.svg"
    alt="AI Logo"
    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
  />
  <span className="flex items-center gap-1">
    Start a trip with AI
    <span className="text-[10px] sm:text-xs bg-black text-white px-2 py-[2px] rounded-full font-medium">Beta</span>
  </span>
</button>

          </Link>
        </div>
      </div>
    </section>
  );
}

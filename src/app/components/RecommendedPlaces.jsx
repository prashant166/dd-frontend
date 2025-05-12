"use client";

import { useRef, useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import PlaceCard from "./PlaceCard";

const samplePlaces = [
  {
    id: "1",
    title: "Nehru Museum & Planetarium (Teen Murti Bhavan)",
    image: "/images/Banner.png",
    rating: "3.9",
    reviews: 164,
    subtitle: "Historic Sites, Speciality Museums",
  },
  {
    id: "2",
    title: "Nehru Park",
    image: "/images/Banner.png",
    rating: "4.2",
    reviews: 154,
    subtitle: "Parks",
  },
  {
    id: "3",
    title: "Mehrauli Archaeological Park",
    image: "/images/Banner.png",
    rating: "4.3",
    reviews: 325,
    subtitle: "Ancient Ruins, Historic Sites",
  },
  {
    id: "4",
    title: "National Rail Museum",
    image: "/images/Banner.png",
    rating: "4.2",
    reviews: 738,
    subtitle: "Speciality Museums",
  },
  {
    id: "4",
    title: "National Rail Museum",
    image: "/images/Banner.png",
    rating: "4.2",
    reviews: 738,
    subtitle: "Speciality Museums",
  },
  {
    id: "4",
    title: "National Rail Museum",
    image: "/images/Banner.png",
    rating: "4.2",
    reviews: 738,
    subtitle: "Speciality Museums",
  },
  {
    id: "4",
    title: "National Rail Museum",
    image: "/images/Banner.png",
    rating: "4.2",
    reviews: 738,
    subtitle: "Speciality Museums",
  },
  {
    id: "4",
    title: "National Rail Museum",
    image: "/images/Banner.png",
    rating: "4.2",
    reviews: 738,
    subtitle: "Speciality Museums",
  },
];

export default function RecommendedPlaces() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300;
    current.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScrollPosition();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScrollPosition);
      return () => ref.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section className="mt-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-1">You might like these</h2>
        <p className="text-sm text-gray-500 mb-4">More things to do in New Delhi</p>

        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 hover:bg-orange-100"
            >
              <FaChevronLeft className="text-orange-600" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2"
          >
            {samplePlaces.map((place, index) => (
              <PlaceCard key={index} place={place} />
            ))}
          </div>


          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 hover:bg-orange-100"
            >
              <FaChevronRight className="text-orange-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

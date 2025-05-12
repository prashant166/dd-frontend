"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchCard from "../components/SearchCard";

const dummyResults = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  image: "/images/Banner.png",
  title: `Sample Place ${i + 1}`,
  location: "Connaught Place, Delhi",
  description:
    "A bustling area known for shopping, historic charm, and lively street performances.",
  tags: ["Historical", "Pet-Friendly", "Popular"],
  category: i % 2 === 0 ? "Cafe" : "Park",
  hasParking: i % 3 !== 0,
  budget: "₹200–400",
}));

export default function SearchPage() {
  const [items, setItems] = useState(dummyResults.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      const next = dummyResults.slice(items.length, items.length + 10);
      setItems([...items, ...next]);
      if (items.length + next.length >= dummyResults.length) {
        setHasMore(false);
      }
    }, 800);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
       <h1 className="text-3xl font-bold mt-30 mb-2">Showing results for your mood</h1>
       <p className="text-gray-600 mb-6 text-base">
    Based on your vibe, we’ve curated some spots in Delhi that match what you're looking for. Go explore!
  </p>
       <div className="relative bg-orange-100 border-l-4 border-orange-600 text-orange-900 p-4 rounded-md shadow-sm mb-8 text-sm md:text-base">
  {/* AI summary label at top-left */}
  <div className="absolute top-2 left-2 flex items-center gap-1 bg-white px-2 py-0.5 rounded-full shadow-sm text-[11px] font-medium text-gray-600 border border-gray-200">
    <img
      src="/images/ai-icon.svg"
      alt="AI Logo"
      className="w-3.5 h-3.5 object-contain"
    />
    AI Summary
  </div>

  <p className="mt-6">
    Feeling artsy or craving something cozy? You might love <strong>Lodhi Garden</strong> for its peaceful vibe
    and historical charm, or <strong>Ama Cafe</strong> in Majnu ka Tila for a warm cup with aesthetic views!
  </p>
</div>





      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className="text-center text-sm text-gray-400">Loading more places...</p>}
        endMessage={
          <p className="text-center text-sm text-gray-500 mt-4">
            You’ve reached the end of the list.
          </p>
        }
      >
        {items.map((item) => (
          <SearchCard key={item.id} {...item} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

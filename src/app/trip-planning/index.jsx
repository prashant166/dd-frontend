"use client";
import { useState } from "react";
import StaticHeader from "../components/StaticHeader";
import Footer from "../components/Footer";
import UserPromptForm from "./UserPromptForm";
import SkeletonLoader from "../components/SkeletonLoader";
import MapDisplay from "./MapDisplay";
import ItineraryCard from "./ItineraryCard";
import TravelTime from "./TravelTImeComponent";

// Dummy itinerary with coords
const mockItinerary = [
  {
    title: "Breakfast at Ama Cafe",
    time: "9:00 AM – 10:00 AM",
    location: "Majnu Ka Tila",
    description: "Chill Tibetan-style cafe with great coffee and breakfast options.",
    coords: [77.2395, 28.7089],
    image: "/images/ama-cafe.jpg",
    tags: ["Cafe", "Cozy", "Popular"],
    category: "Cafe",
    hasParking: false,
    budget: "₹300–500",
  },
  {
    title: "Walk at Lodhi Garden",
    time: "10:30 AM – 12:00 PM",
    location: "Lutyens' Delhi",
    description: "Relaxing walk through greenery and tombs from the Lodhi era.",
    coords: [77.2195, 28.5916],
    image: "/images/lodhi-garden.jpg",
    tags: ["Historical", "Nature", "Romantic"],
    category: "Park",
    hasParking: true,
    budget: "Free",
  },
  {
    title: "Quick Street Food at Janpath",
    time: "12:15 PM – 1:00 PM",
    location: "Connaught Place",
    description: "Wrap up with local snacks and quick shopping at Janpath market.",
    coords: [77.2186, 28.6328],
    image: "/images/janpath.jpg",
    tags: ["Street Food", "Shopping"],
    category: "Market",
    hasParking: true,
    budget: "₹100–200",
  },
];


export default function TripPlanningPage() {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState([]);

  const handleGenerate = (finalPrompt) => {
    console.log("Prompt:", finalPrompt);
    setLoading(true);
    setItinerary([]);

    // Simulate API call
    setTimeout(() => {
      setItinerary(mockItinerary);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <StaticHeader />

      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Left: Input + Results */}
        <div>
          <h1 className="text-3xl font-bold mb-4 mt-20">Plan Your Trip</h1>
          <p className="text-gray-600 mb-6">
            Describe your vibe and interests — we’ll suggest a personalized plan.
          </p>

          <UserPromptForm onGenerate={handleGenerate} />

          {loading && <SkeletonLoader />}

          {itinerary.length > 0 && (
            <div className="mt-10 space-y-6">
              {itinerary.map((item, i) => (
  <div key={i}>
    <ItineraryCard step={item} stepNumber={i + 1} />
    {i < itinerary.length - 1 && (
      <TravelTime time="15 mins" mode="car" />
    )}
  </div>
))}

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => alert("PDF download coming soon")}
                  className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2 text-sm rounded-md transition"
                >
                  📄 Download as PDF
                </button>
                <button
                  onClick={() => alert("Email feature coming soon")}
                  className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2 text-sm rounded-md transition"
                >
                  ✉️ Send via Email
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Map */}
        <div className="sticky top-40 h-[500px] rounded-lg overflow-hidden mt-30">
          <MapDisplay places={itinerary} />
        </div>
      </div>

      <Footer />
    </>
  );
}

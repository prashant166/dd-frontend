import Image from "next/image";
import AreaSection from "./AreaSection";
import ReviewsSection from "./ReviewSection";
import MockSidebar from "./MockSidebar";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { FaFemale } from "react-icons/fa";


export default function PlaceDetail({ place }) {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:flex gap-8 py-10 mt-24">
      {/* Left Main Content */}
      <div className="flex-1">
        {/* Header & Images */}
        <div className="mb-6">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
    <div>
      <h1 className="text-3xl font-extrabold">{place.name}</h1>
      <p className="text-sm text-gray-600 mt-2">{place.locality}</p>
    </div>
    

    
  </div>
  <div className="flex items-center gap-2 text-pink-800 text-sm bg-pink-50 border border-pink-300 rounded-md px-4 py-2 mb-5 max-w-md">
  <FaFemale className="text-lg" />
  <span><strong>83%</strong> of women travelers said they felt safe here.</span>
</div>

  {/* Main Image */}
  <div className="w-full rounded-2xl overflow-hidden shadow-sm">
    <Image
      src={place.image}
      alt={place.name}
      width={1200}
      height={500}
      className="object-cover w-full h-[400px]"
    />
  </div>
</div>


        {/* AI Summary Box */}
        <div className="bg-orange-100 border-l-4 border-orange-500 p-5 rounded-xl shadow-sm mb-6">
          <h2 className="text-lg font-bold mb-2">💡 What’s special about this place?(AI-Powered Summary)</h2>
          <p className="text-sm text-gray-700">
            This place offers a unique blend of historical architecture and lush greenery. Ideal for morning walks,
            quiet time, or photography enthusiasts.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500 mb-1">💰 Budget Per Head</p>
            <p className="font-semibold">Medium</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500 mb-1">🚗 Parking Available</p>
            <p className="font-semibold">Yes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500 mb-1">⏰ Best Time to Visit</p>
            <p className="font-semibold">Morning</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500 mb-1">🎟️ Entry Fee</p>
            <p className="font-semibold">₹50</p>
          </div>
            <div className="bg-orange-50 p-5 rounded-lg shadow-sm border border-orange-200 col-span-1 sm:col-span-2">
  <p className="text-orange-600 font-semibold text-sm mb-2
">🗣️ Our contributor said:</p>
  <p className="text-gray-800 text-sm mb-3">
    “This spot is perfect for unwinding. You’ll love the calmness, the food around, and how walkable it all is.”
  </p>
  <p className="text-sm text-gray-500 italic">– Aman Sharma, travelling Delhi since 2017</p>
</div>

        </div>

        {/* Description & Reviews */}
        {/* <p className="text-base text-gray-700 mb-6">{place.description}</p>
        <ReviewsSection /> */}

        {/* Area Info */}
        <AreaSection coordinates={place.coordinates} />
      </div>

      {/* Right Sidebar */}
      <MockSidebar placeName={place.name} />

    </div>
  );
}

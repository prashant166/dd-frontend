"use client";
import Image from "next/image";

const restaurants = [
  {
    name: "Cafe Lota",
    rating: 4.4,
    reviews: 673,
    distance: "1.2 km",
    tags: "Indian • Cafe • Vegetarian",
    image: "/images/cafe.jpg",
  },
  {
    name: "360°",
    rating: 4.4,
    reviews: 340,
    distance: "1.1 km",
    tags: "Indian • Sushi • Vegetarian",
    image: "/images/360.jpg",
  },
  {
    name: "Saz - American Brasserie",
    rating: 4.6,
    reviews: 48,
    distance: "0.6 km",
    tags: "American • Bar",
    image: "/images/saz.jpg",
  },
];

const attractions = [
  {
    name: "Humayun's Tomb",
    rating: 4.5,
    reviews: 10588,
    distance: "1.2 km",
    tags: "Architectural • Religious",
    image: "/images/humayun.jpg",
  },
  {
    name: "India Gate",
    rating: 4.2,
    reviews: 10465,
    distance: "2 km",
    tags: "Historic Sites • Landmarks",
    image: "/images/gate.jpg",
  },
  {
    name: "Sunder Nursery Park",
    rating: 4.6,
    reviews: 181,
    distance: "1.4 km",
    tags: "Parks • Gardens",
    image: "/images/sunder.jpg",
  },
];

export default function AreaSection({ coordinates }) {
  return (
    <div className="mt-24 px-4 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">📍 The area</h2>
          <p className="mb-1 font-medium">Mathura Road, New Delhi 110003 India</p>
          <p className="mb-4 text-sm text-gray-600">Neighbourhood: Minto Road</p>

          <div className="flex gap-4 mb-6 text-sm font-medium">
            <a href="#" className="text-blue-600 hover:underline">Visit website</a>
            <a href="#" className="text-blue-600 hover:underline">Call</a>
            <a href="#" className="text-blue-600 hover:underline">Email</a>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Best nearby</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {/* Restaurants */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Restaurants</p>
                {restaurants.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <Image src={r.image} alt={r.name} width={60} height={60} className="rounded-md object-cover" />
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-green-700 text-sm">
                        {r.rating} • ({r.reviews}) • {r.distance}
                      </p>
                      <p className="text-sm text-gray-600">{r.tags}</p>
                    </div>
                  </div>
                ))}
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">See all</a>
              </div>

              {/* Attractions */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Attractions</p>
                {attractions.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <Image src={a.image} alt={a.name} width={60} height={60} className="rounded-md object-cover" />
                    <div>
                      <p className="font-semibold">{a.name}</p>
                      <p className="text-green-700 text-sm">
                        {a.rating} • ({a.reviews}) • {a.distance}
                      </p>
                      <p className="text-sm text-gray-600">{a.tags}</p>
                    </div>
                  </div>
                ))}
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">See all</a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (MAP) */}
        <div className="w-full lg:w-[420px] h-[500px] rounded-xl overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="border-0"
            src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}

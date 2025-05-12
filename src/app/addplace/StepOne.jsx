"use client";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2hhbnQxNjExIiwiYSI6ImNtYWNyejAwZDAwZ28ycW9kdGpkNmxqMXEifQ.rv24V3N6Peq8GUSNXTc08w';


const categories = [
  { id: 1, name: "Accommodation" },
  { id: 2, name: "Restaurant" },
  { id: 3, name: "Things to Do" },
  { id: 4, name: "Shopping" },
  { id: 5, name: "Attraction" },
  { id: 6, name: "Event" },
  { id: 7, name: "Transportation" },
  { id: 8, name: "Other" },
];

export default function AddPlaceStep1({ onNext }) {
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [touched, setTouched] = useState(false);
  const mapContainer = useRef(null);
const geocoderContainer = useRef(null);
const [location, setLocation] = useState('');
const [latLng, setLatLng] = useState({ lat: null, lng: null });

useEffect(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [77.2090, 28.6139], // Delhi center
    zoom: 11,
  });

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    types: 'poi,poi.landmark,place,locality,neighborhood',
    countries: 'IN',
    bbox: [76.84, 28.4, 77.33, 28.88], // Bounding box for Delhi
    proximity: { longitude: 77.2090, latitude: 28.6139 }, // Centered on Delhi
    placeholder: 'Search for a place in Delhi...'
  });
  
  

  geocoder.addTo(geocoderContainer.current); // ✅ place in your ref

  geocoder.on("result", (e) => {
    const { center, place_name } = e.result;
    setLatLng({ lng: center[0], lat: center[1] }); // ✅ fixes variable name
    setLocation(place_name); // ✅ shows full address
  });

  return () => map.remove();
}, []);




  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!name || !selectedCategory) return;
    onNext({
      name,
      categoryId: selectedCategory.id,
      location,
      latitude: latLng.lat,
      longitude: latLng.lng,
    });
    
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 space-y-10 mt-20">
      <h1 className="text-4xl font-bold">Add a place</h1>

      {/* Stepper */}
      <div className="flex gap-6 items-center text-base font-semibold">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center bg-orange-600 text-white rounded-full">1</div>
          <span>Basic details</span>
        </div>
        <div className="w-6 h-0.5 bg-gray-300" />
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-7 h-7 flex items-center justify-center border border-gray-400 rounded-full">2</div>
          <span>More details about the place</span>
        </div>
      </div>

      {/* Name Field */}
      <div>
        <label className="block text-lg font-medium mb-2">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full border rounded-md px-4 py-3 text-base focus:outline-none ${
            touched && !name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter name of the place"
        />
        {touched && !name && <p className="text-red-500 text-sm mt-1">This field is required</p>}
      </div>

      {/* Category Field */}
      <div>
        <label className="block text-lg font-medium mb-2">
          Which category best describes this place?
        </label>
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 border rounded-full text-base font-medium transition ${
                selectedCategory?.id === cat.id
                  ? "bg-orange-600 text-white border-orange-600"
                  : "border-gray-300 text-gray-800 hover:border-orange-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        {touched && !selectedCategory && (
          <p className="text-red-500 text-sm mt-2">This field is required</p>
        )}
      </div>
      <div>
  <label className="block text-lg font-medium mb-2">Location</label>
  <div ref={geocoderContainer} className="mb-4" />
  {location && <p className="text-sm text-gray-600">Selected: {location}</p>}
</div>
<div ref={mapContainer} className="w-full h-64 mt-4 rounded-xl border" />



      {/* Submit */}
      <button
        type="submit"
        className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full"
      >
        Continue
      </button>
    </form>
  );
}

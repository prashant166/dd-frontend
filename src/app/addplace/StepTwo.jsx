"use client";
import { useState } from "react";

const budgets = ["Low", "Medium", "High", "Luxury"];
const bestTimes = ["Morning", "Afternoon", "Evening", "Night"];

export default function AddPlaceStep2({ onBack, onSubmit }) {
  const [description, setDescription] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [budget, setBudget] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [parking, setParking] = useState(false);
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      description,
      entryFee: entryFee || null,
      budget_per_head: budget,
      best_time_to_visit: bestTime,
      parking_available: parking,
      images,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 space-y-10 mt-20">
      <h1 className="text-4xl font-bold">Add a place</h1>

      {/* Stepper */}
      <div className="flex gap-6 items-center text-base font-semibold">
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-7 h-7 flex items-center justify-center border border-gray-400 rounded-full">1</div>
          <span>Basic details</span>
        </div>
        <div className="w-6 h-0.5 bg-gray-300" />
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center bg-orange-600 text-white rounded-full">2</div>
          <span>More details of the place</span>
        </div>
      </div>

      <div>
        <label className="block text-lg font-medium mb-2">Share your best shot </label>
        <div className="relative inline-block">
  <input
    type="file"
    id="upload-images"
    multiple
    onChange={handleImageUpload}
    className="hidden"
  />
  <label
    htmlFor="upload-images"
    className="cursor-pointer inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition mt-2"
  >
     Upload Images
  </label>
</div>

        <div className="flex gap-3 mt-3 flex-wrap">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Preview ${idx}`}
              className="w-28 h-28 object-cover rounded-md border"
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-lg font-medium mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base resize-none"
          placeholder="Add a short description of this place..."
          rows={4}
        />
      </div>

      {/* Entry Fee */}
      <div>
        <label className="block text-lg font-medium mb-2">Entry Fee (optional)</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={entryFee}
          onChange={(e) => setEntryFee(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base"
          placeholder="Enter amount in INR"
        />
      </div>

      {/* Budget */}
      <div>
        <label className="block text-lg font-medium mb-2">Budget per head</label>
        <div className="flex gap-4 flex-wrap">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`px-5 py-2 border rounded-full text-base font-medium ${
                budget === b
                  ? "bg-orange-600 text-white border-orange-600"
                  : "border-gray-300 text-gray-800 hover:border-orange-600"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Best Time to Visit */}
      <div>
        <label className="block text-lg font-medium mb-2">Best time to visit</label>
        <div className="flex gap-4 flex-wrap">
          {bestTimes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setBestTime(t)}
              className={`px-5 py-2 border rounded-full text-base font-medium ${
                bestTime === t
                  ? "bg-orange-600 text-white border-orange-600"
                  : "border-gray-300 text-gray-800 hover:border-orange-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Parking */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={parking}
          onChange={(e) => setParking(e.target.checked)}
          className="w-5 h-5"
        />
        <label className="text-base">Parking Available</label>
      </div>

      {/* Image Upload */}
      

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-400 rounded-full font-medium"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

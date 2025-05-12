export default function MockSidebar() {
  return (
    <aside className="w-full lg:w-[300px] mt-10 lg:mt-0">
      <div className="bg-white p-4 shadow-md rounded-xl mb-6">
        <h3 className="text-lg font-bold mb-2">🎟️ Tours & Experiences</h3>
        <p className="text-sm text-gray-600 mb-4">Explore different ways to experience this place.</p>
        <button className="w-full bg-black text-white py-2 rounded-full font-semibold">See options</button>
      </div>

      <div className="bg-white p-4 shadow-md rounded-xl">
        <h3 className="text-lg font-bold mb-2">⏰ Hours</h3>
        <p className="text-sm text-red-600">Closed now</p>
        <p className="text-sm mt-1"><strong>Sunday:</strong> 9:00 AM - 5:00 PM</p>
      </div>
    </aside>
  );
}

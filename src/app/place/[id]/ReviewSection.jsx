export default function ReviewsSection() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">💬 Reviews</h2>
      <div className="bg-white p-4 shadow-sm rounded-xl mb-4">
        <p className="font-bold">Great Zoo</p>
        <p className="text-sm text-gray-700 mb-2">
          I saw many animals like leopard, elephant, tiger, wolf, monkey...
        </p>
        <p className="text-xs text-gray-500">By Aditya Kumar • Jun 2024</p>
      </div>
      <div className="bg-white p-4 shadow-sm rounded-xl">
        <p className="font-bold">Nice</p>
        <p className="text-sm text-gray-700 mb-2">
          The zoological park in Delhi is a fantastic destination...
        </p>
        <p className="text-xs text-gray-500">By Manish • Apr 2023</p>
      </div>
    </div>
  );
}

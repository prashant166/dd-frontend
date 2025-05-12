import Image from "next/image";
import AreaSection from "./AreaSection";
import ReviewsSection from "./ReviewSection";
import MockSidebar from "./MockSidebar";

export default function PlaceDetail({ place }) {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:flex gap-8 py-10 mt-24">
      {/* Left Main Content */}
      <div className="flex-1">
        {/* Header & Images */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold mb-1">{place.name}</h1>
          <p className="text-sm text-gray-600 mb-4">{place.locality}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={place.image}
              alt={place.name}
              width={1200}
              height={500}
              className="object-cover w-full h-[300px] col-span-2"
            />
            <div className="grid gap-4">
              <Image
                src="/images/sample1.jpg"
                alt="Secondary"
                width={300}
                height={150}
                className="w-full h-[145px] object-cover rounded-lg"
              />
              <Image
                src="/images/sample2.jpg"
                alt="Tertiary"
                width={300}
                height={150}
                className="w-full h-[145px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Description & Reviews */}
        <p className="text-base text-gray-700 mb-6">{place.description}</p>
        <ReviewsSection />

        {/* Area Info */}
        <AreaSection coordinates={place.coordinates} />
      </div>

      {/* Right Sidebar */}
      <MockSidebar />
    </div>
  );
}

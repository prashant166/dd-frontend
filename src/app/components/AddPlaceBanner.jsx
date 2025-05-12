"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AddPlaceBanner() {
  const router = useRouter();
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-gray-100 overflow-hidden rounded-xl my-8">
      {/* Background image */}
      <Image
        src="/images/AddPlace.png"
        alt="Add Place Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Left-aligned content */}
      {/* <div className="absolute inset-0 flex items-center px-6 md:px-16 z-10">
        <div className="max-w-xl text-left text-black">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Share Your Favorite Spot in Delhi
          </h1>
          <p className="text-md md:text-lg mb-6 font-medium">
  Add your recommended cafes, hidden gems, or iconic<br />
  landmarks and help others discover the city better.
</p>

          <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
            Add a Place Now
          </button>
        </div>
      </div> */}
      
      <div
  className="
    absolute inset-0 flex flex-col justify-start md:justify-center 
    px-4 sm:px-6 md:px-16 pt-4 sm:pt-6 md:pt-0
    z-10
  "
>

  <div
    className="
      text-left text-black max-w-xl
    "
  >
    <h1 className="text-lg sm:text-xl md:text-5xl font-extrabold mb-2 sm:mb-4 leading-snug">
      Share Your Favorite Spot in Delhi
    </h1>
    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 font-medium">
      Add your recommended cafes, hidden gems, or iconic<br />
      landmarks and help others discover the city better.
    </p>
    <button onClick={() => router.push("/addplace")} className="bg-black hover:bg-gray-900 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition">
      Add a Place Now
    </button>
  </div>
</div>

    </section>
  );
}

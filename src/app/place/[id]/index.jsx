import PlaceDetail from "./PlaceDetail";
import StaticHeader from "../../components/StaticHeader";
import Footer from "../../components/Footer";

const mockPlaces = [
  {
    id: "1",
    name: "Mehrauli Archaeological Park",
    description: "A historic site with ruins, greenery, and ancient architecture.",
    locality: "Mehrauli, New Delhi",
    image: "/images/place1.png",
    coordinates: { lat: 28.5206, lng: 77.1855 },
  },
  {
    id: "2",
    name: "Lodhi Garden",
    description: "A lush garden with tombs from the Lodhi dynasty.",
    locality: "Lutyens' Delhi",
    image: "/images/place2.png",
    coordinates: { lat: 28.5916, lng: 77.2197 },
  },
];

// ✅ REQUIRED for static export with dynamic routes
export async function generateStaticParams() {
  return mockPlaces.map((place) => ({
    id: place.id,
  }));
}

export default function Page({ params }) {
  const place = mockPlaces.find((p) => p.id === params.id);

  if (!place) return <p className="text-center mt-20">Place not found</p>;

  return (
    <>
      <StaticHeader />
      <PlaceDetail place={place} />
      <Footer />
    </>
  );
}

"use client";

import { useParams } from "next/navigation";
import PlaceDetail from "./PlaceDetail";
import StaticHeader from "../../components/StaticHeader";
import Footer from "../../components/Footer"; // Assumed path

const mockPlaces = [
  {
    id: "1",
    name: "Mehrauli Archaeological Park",
    description: "A historic site with ruins, greenery, and ancient architecture.",
    locality: "Mehrauli, New Delhi",
    image: "/images/logo.png",
    coordinates: { lat: 28.5206, lng: 77.1855 },
  },
  {
    id: "2",
    name: "Lodhi Garden",
    description: "A lush garden with tombs from the Lodhi dynasty.",
    locality: "Lutyens' Delhi",
    image: "/images/lodhi.jpg",
    coordinates: { lat: 28.5916, lng: 77.2197 },
  },
];

export default function PlaceIndex() {
  const { id } = useParams();
  const place = mockPlaces.find((p) => p.id === id);

  if (!place) return <p className="text-center mt-20">Place not found</p>;

  return (
    <>
      <StaticHeader />
      <PlaceDetail place={place} />
      <Footer />
    </>
  );
}

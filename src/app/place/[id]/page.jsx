
import dynamic from "next/dynamic";

// Lazy load your UI logic from index.jsx
const PlaceIndex = dynamic(() => import("./index"));

// Optional metadata (SEO, title, etc.)
export const metadata = {
  title: "Place Details | DailyDilli",
  description: "Explore beautiful places in Delhi with detailed insights",
};

export default function Page() {
  return <PlaceIndex />;
}

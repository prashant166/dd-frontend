import dynamic from "next/dynamic";

const ItineraryPlanner = dynamic(() => import("./index"));

export const metadata = {
  title: "Trip Planner | DailyDilli",
  description: "Plan your Delhi trip with a smart itinerary",
};

export default function Page() {
  return <ItineraryPlanner />;
}

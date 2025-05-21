import dynamic from "next/dynamic";

const WishlistPage = dynamic(() => import("./index"));

export const metadata = {
  title: "Your Wishlist | DailyDilli",
  description: "Browse your favorite saved places on DailyDilli.",
};

export default function Page() {
  return <WishlistPage />;
}

"use client";

import Link from "next/link";
import {
  FiArchive,
  FiCoffee,
  FiCompass,
  FiHeart,
  FiShoppingBag,
  FiSmile,
  FiMap,
  FiEyeOff,
} from "react-icons/fi";

const categories = [
  { name: "Historical", icon: FiArchive, slug: "historical" },
  { name: "Restaurants", icon: FiCoffee, slug: "restaurants" },
  { name: "Adventure", icon: FiCompass, slug: "adventure" },
  { name: "Romantic", icon: FiHeart, slug: "romantic" },
  { name: "Pet-Friendly", icon: FiSmile, slug: "pet-friendly" },
  { name: "Shopping", icon: FiShoppingBag, slug: "shopping" },
  { name: "Local Markets", icon: FiMap, slug: "markets" },
  { name: "Hidden Gems", icon: FiEyeOff, slug: "hidden-gems" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Explore by Category</h2>
        <p className="text-gray-600 mb-10">
          Pick what you love and let us guide your next outing
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map(({ name, icon: Icon, slug }) => (
            <Link
              key={slug}
              href={`/search?category=${slug}`}
              className="group bg-white p-6 rounded-xl border shadow-sm hover:shadow-md hover:ring-2 hover:ring-orange-500 transition-all duration-200 flex flex-col items-center text-center"
            >
              <Icon className="text-3xl text-orange-500 mb-3 transition-transform duration-200 group-hover:scale-110 group-hover:text-orange-600" />
              <span className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

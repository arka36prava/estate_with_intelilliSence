"use client";

import {
  School,
  Hospital,
  Train,
  ShoppingBag,
  Trees,
  UtensilsCrossed,
} from "lucide-react";

const places = [
  {
    icon: School,
    title: "School",
    distance: "800 m",
  },
  {
    icon: Hospital,
    title: "Hospital",
    distance: "1.2 km",
  },
  {
    icon: Train,
    title: "Metro Station",
    distance: "900 m",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Mall",
    distance: "2.3 km",
  },
  {
    icon: Trees,
    title: "Park",
    distance: "500 m",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    distance: "350 m",
  },
];

export default function NearbyPlaces() {
  return (
    <div className="rounded-3xl border bg-white shadow-lg p-8">
      <h2 className="text-3xl text-center text-red-800 font-bold mb-8">
        Nearby important locations and Amenities
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => {
          const Icon = place.icon;

          return (
            <div
              key={place.title}
              className="rounded-2xl border p-6 hover:shadow-lg transition"
            >
              <Icon className="w-8 h-8 text-orange-500 mb-4" />

              <h3 className="font-semibold text-lg">
                {place.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {place.distance} away
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
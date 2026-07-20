"use client";

import { motion } from "framer-motion";

import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: "1",
    title: "Luxury Apartment",
    city: "Kolkata",
    locality: "New Town",
    image: "/images/Properties/project_img_1.jpg",
    price: 8500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    roi: 12.8,
    aiScore: 94,
  },
  {
    id: "2",
    title: "Modern Villa",
    city: "Bangalore",
    locality: "Whitefield",
    image: "/images/Properties/project_img_2.jpg",
    price: 23500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3850,
    roi: 10.5,
    aiScore: 91,
  },
  {
    id: "3",
    title: "Premium Penthouse",
    city: "Mumbai",
    locality: "Powai",
    image: "/images/Properties/project_img_3.jpg",
    price: 42000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    roi: 11.4,
    aiScore: 96,
  },
  {
    id: "4",
    title: "Lake View House",
    city: "Hyderabad",
    locality: "Gachibowli",
    image: "/images/Properties/project_img_4.jpg",
    price: 17500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    roi: 11.9,
    aiScore: 92,
  },
  {
    id: "5",
    title: "Skyline Residency",
    city: "Pune",
    locality: "Hinjewadi",
    image: "/images/Properties/project_img_5.jpg",
    price: 9800000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1700,
    roi: 13.1,
    aiScore: 95,
  },
  {
    id: "6",
    title: "Green Valley Villa",
    city: "Chennai",
    locality: "OMR",
    image: "/images/Properties/project_img_6.jpg",
    price: 18900000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3600,
    roi: 10.8,
    aiScore: 90,
  },
];
export default function PropertyGrid() {
  return (
    <section className="bg-slate-950 min-h-screen py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <span
            className="
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            px-5
            py-2
            text-sm
            text-blue-300
          "
          >
            Premium Collection
          </span>

          <h1
            className="
            mt-8
            text-5xl
            font-bold
            text-white
          "
          >
            Explore

            <span className="text-blue-400">
              {" "}Properties
            </span>

          </h1>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
          "
          >
            Browse our premium collection of
            AI-analyzed investment properties
            across India's fastest-growing cities.
          </p>

        </motion.div>

        {/* Grid */}

        <div
          className="
          mt-20
          grid
          gap-10
          sm:grid-cols-2
          xl:grid-cols-3
        "
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
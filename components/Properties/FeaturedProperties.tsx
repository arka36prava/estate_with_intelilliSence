"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
];
export default function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="bg-slate-950 py-12 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
          }}
          className="text-center"
        >

          <span
            className="
            rounded-full
            border
            border-blue-500/40
            bg-blue-500/10
            px-5
            py-2
            text-sm
            text-blue-300
          "
          >
            Featured Collection Only For You
          </span>

          <h2
            className="
            mt-8
            text-5xl
            font-bold
            text-white
          "
          >
            Featured

            <span className="text-blue-400">
              {" "}Properties
            </span>

          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-slate-400
          "
          >
            Explore handpicked investment
            opportunities analyzed by our
            AI engine for ROI, rental yield,
            affordability and future growth.
          </p>

        </motion.div>

        {/* Cards */}

        <div
          className="
          mt-20
          grid
          gap-10
          md:grid-cols-2
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

        {/* Button */}

        <div className="mt-20 text-center">

          <Link
            href="/properties"
            className="
            inline-flex
            items-center
            rounded-full
            bg-blue-600
            px-10
            py-4
            text-lg
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
          >
            View All Properties
          </Link>

        </div>

      </div>
    </section>
  );
}
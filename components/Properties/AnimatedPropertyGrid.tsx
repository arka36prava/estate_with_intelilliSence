"use client";

import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

interface AnimatedPropertyGridProps {
  properties: {
    id: string;
    title: string;
    city: string;
    locality: string;
    image: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    roi?: number;
    aiScore?: number;
  }[];
}

export default function AnimatedPropertyGrid({
  properties,
}: AnimatedPropertyGridProps) {
  return (
    <section className="bg-slate-950 min-h-screen py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            <span className="text-blue-400"> Properties</span>
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
            Browse our premium collection of AI-analyzed investment
            properties across India's fastest-growing cities.
          </p>
        </motion.div>

        <div
          className="
            mt-20
            grid
            gap-8
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
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TiltPropertyCard from "./TiltPropertyCard";

const featuredProperties = [
  {
    id: "1",
    title: "Luxury Apartment",
    image: "/images/Properties/project_img_1.jpg",
  },
  {
    id: "2",
    title: "Modern Villa",
    image: "/images/Properties/project_img_2.jpg",
  },
  {
    id: "3",
    title: "Premium Penthouse",
    image: "/images/Properties/project_img_3.jpg",
  },
  {
    id: "4",
    title: "Lake View House",
    image: "/images/Properties/project_img_4.jpg",
  },
  {
    id: "5",
    title: "Skyline Residency",
    image: "/images/Properties/project_img_5.jpg",
  },
];
export default function FeaturedCarousel() {
  return (
    <section
      id="featured-properties"
      className="bg-slate-950 py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            Explore Our

            <span className="text-blue-400">
              {" "}Featured Properties
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
            Discover premium investment
            opportunities selected by
            our AI recommendation engine.
          </p>

        </motion.div>

        {/* Carousel */}

        <div className="relative mt-20">

          <div
            className="
            flex
            gap-10
            px-5
            whitespace-nowrap
            animate-property-scroll
            group-hover:[animation-play-state:paused]
          "
          >

            {[...featuredProperties, ...featuredProperties].map(
              (property, index) => (
                <TiltPropertyCard
                  key={index}
                  property={property}
                />
              )
            )}

          </div>

        </div>

        <div className="mt-20 text-center">

          <Link
            href="/properties"
            className="
            inline-flex
            items-center
            rounded-full
            bg-blue-600
            px-8
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
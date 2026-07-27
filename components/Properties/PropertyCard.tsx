"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Sparkles,
} from "lucide-react";

import ImageReveal from "./ImageReveal";

interface PropertyCardProps {
  property: {
    id: string;

    title: string;

    city: string;

    locality: string;

    image?: string;

    price: number;

    bedrooms: number;

    bathrooms: number;

    area: number;

    roi?: number;

    aiScore?: number;
  };
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: .25,
      }}
      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-xl
    "
    >
      {/* Image */}

      <ImageReveal
        src={property.image  || "/images/placeholder.jpg"}
        alt={property.title}
      />
      
      {/* Content */}

      <div className="p-4">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-xl font-bold text-white">

              {property.title}

            </h3>

            <div className="mt-2 flex items-center gap-2 text-slate-400">

              <MapPin size={16} />

              {property.locality},{" "}
              {property.city}

            </div>

          </div>

          <span
            className="
            rounded-full
            bg-blue-600
            px-3
            py-1
            text-sm
            font-semibold
            text-white
          "
          >
            ⭐ {property.aiScore ?? 94}
          </span>

        </div>

        <p className="mt-5 text-3xl font-bold text-blue-400">

          ₹ {property.price.toLocaleString("en-IN")}

        </p>

        {/* Features */}

        <div className="mt-6 grid grid-cols-3 gap-4">

          <div className="flex flex-col items-center">

            <BedDouble className="text-blue-400" />

            <span className="mt-2 text-sm text-slate-400">

              {property.bedrooms} Beds

            </span>

          </div>

          <div className="flex flex-col items-center">

            <Bath className="text-blue-400" />

            <span className="mt-2 text-sm text-slate-400">

              {property.bathrooms} Baths

            </span>

          </div>

          <div className="flex flex-col items-center">

            <Ruler className="text-blue-400" />

            <span className="mt-2 text-sm text-slate-400">

              {property.area} sqft

            </span>

          </div>

        </div>

        {/* ROI */}

        <div
          className="
          mt-6
          flex
          items-center
          justify-between
          rounded-2xl
          bg-slate-900
          p-4
        "
        >

          <div>

            <p className="text-sm text-slate-400">

              Expected ROI

            </p>

            <p className="text-xl font-bold text-green-400">

              {property.roi ?? 12.4}%

            </p>

          </div>

          <Sparkles className="text-yellow-400" />

        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">

          <Link
            href={`/properties/${property.id}`}
            className="
            flex-1
            rounded-xl
            border
            border-white/10
            py-3
            text-center
            text-white
            transition
            hover:bg-white/10
          "
          >
            Details
          </Link>

          <Link
            href={`/ai?property=${property.id}`}
            className="
            flex-1
            rounded-xl
            bg-blue-600
            py-3
            text-center
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
          >
            Virtual Tour With VFX
          </Link>

        </div>

      </div>

    </motion.div>
  );
}
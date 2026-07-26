"use client";

import Image from "next/image";
import {
  MapPin,
  Heart,
  Share2,
  Phone,
  BedDouble,
  Bath,
  Square,
  Car,
  Sparkles,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";
interface PropertyHeroProps {
  property: any;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  console.log(property);
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-10">
      {/* Hero Image */}
      <div className="relative h-[260px] sm:h-[340px] lg:h-[600px] rounded-3xl overflow-hidden">

        <ImageCarousel images={property.images} />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* AI Score */}
        <div className="absolute top-6 left-6">
          <div className="bg-orange-500 text-white px-5 py-3 rounded-2xl shadow-xl">
            <p className="text-xs uppercase tracking-wider">AI Score</p>
            <h2 className="text-2xl font-bold">
              {property.score.aiScore}/100
            </h2>
          </div>
        </div>

        {/* Save + Share */}
        <div className="absolute top-6 right-6 flex gap-3">
          <button className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-105 transition">
            <Heart size={20} />
          </button>

          <button className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-105 transition">
            <Share2 size={20} />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-2 left-8 right-8 flex flex-col md:flex-row justify-between items-end">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 mt-3 text-lg">
              <MapPin size={18} />
              <span>
                {property.locality}, {property.city}
              </span>
            </div>
          </div>

          <div className="mt-5 md:mt-0">
            <h2 className="text-4xl font-bold text-white">
              ₹{property.price.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>
      </div>

      {/* Specification Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <BedDouble className="text-orange-500 mb-3" size={28} />
          <p className="text-gray-500 text-sm">Bedrooms</p>
          <h3 className="text-2xl font-bold">{property.bedrooms}</h3>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <Bath className="text-orange-500 mb-3" size={28} />
          <p className="text-gray-500 text-sm">Bathrooms</p>
          <h3 className="text-2xl font-bold">{property.bathrooms}</h3>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <Square className="text-orange-500 mb-3" size={28} />
          <p className="text-gray-500 text-sm">Area</p>
          <h3 className="text-2xl font-bold">{property.area} sqft</h3>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <Car className="text-orange-500 mb-3" size={28} />
          <p className="text-gray-500 text-sm">Parking</p>
          <h3 className="text-2xl font-bold">{property.parking}</h3>
        </div>
      </div>

      {/* Property Info */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1">
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
              {property.propertyType}
            </span>

            <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-medium">
              {property.furnishing.replace("_", " ")}
            </span>

            <span className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium">
              Built {property.yearBuilt}
            </span>
          </div>

          <p className="mt-6 text-cyan-300 leading-8 text-lg">
            {property.description}
          </p>
        </div>

        {/* Contact Card */}
        <div className="w-full lg:w-80 rounded-3xl border bg-white shadow-xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="text-orange-500" />
            <h3 className="font-bold text-xl">
              Interested in this property?
            </h3>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-semibold flex justify-center items-center gap-2">
            <Phone size={18} />
            Contact Builder
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Instant callback • Verified Listing
          </p>
        </div>
      </div>
    </section>
  );
}
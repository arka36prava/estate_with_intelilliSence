"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// interface ImageCarouselProps {
//   images: string[];
// }
interface ImageCarouselProps {
  images: {
    id: string;
    imageUrl: string;
    propertyId: string;
  }[];
}

export default function ImageCarousel({
  images,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(nextSlide, 4000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative w-full h-[380px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative min-w-full h-full"
          >
            <Image
              src={img.imageUrl}
              alt={`Property ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-white w-8"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
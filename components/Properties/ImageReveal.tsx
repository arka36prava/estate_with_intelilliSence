"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  delay?: number;
  height?: string;
}

export default function ImageReveal({
  src,
  alt,
  delay = 0,
  height = "h-56",
}: ImageRevealProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${height}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />

      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-white"
      />
    </div>
  );
}
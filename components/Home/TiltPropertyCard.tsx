"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface Property {
  id: string;
  title: string;
  image: string;
}

interface TiltPropertyCardProps {
  property: Property;
}

export default function TiltPropertyCard({
  property,
}: TiltPropertyCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 250,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 250,
    damping: 20,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["15deg", "-15deg"]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["-15deg", "15deg"]
  );

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <Link href="/properties">

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.05,
           y: -12,
        }}
        className="
        relative
        h-[420px]
        w-[320px]
        flex-shrink-0
        cursor-pointer
      "
      >

              {/* Image */}

        <div
  style={{
    transform: "translateZ(30px)",
  }}
  className="
    absolute
    inset-0
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    shadow-2xl
  "
>

  {/* AI Badge */}
  <div className="absolute top-5 left-5 z-20 flex items-center gap-2 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
  <Sparkles size={14} />
  AI Pick
</div>

  <Image
    src={property.image}
    alt={property.title}
    fill
    className="
      object-cover
      transition-transform
      duration-700
      hover:scale-110
    "
  />

  {/* Blue Hover Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-blue-500/0
      transition-all
      duration-500
      hover:bg-blue-500/10
    "
  />

  {/* Gradient */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/90
      via-black/20
      to-transparent
    "
  />

</div>

        {/* Glass Card */}

        <div
          style={{
            transform: "translateZ(70px)",
          }}
          className="
          absolute
          bottom-6
          left-6
          right-6
        "
        >

          <div
            className="
            rounded-2xl
            border
            border-white/20
            bg-white/10
            p-5
            backdrop-blur-xl
          "
          >

            <h3
              className="
              text-2xl
              font-bold
              text-white
            "
            >
              {property.title}
            </h3>

            <p className="mt-2 text-sm text-slate-300">
              AI Recommended Property
            </p>
            <p className="mt-4 text-sm font-medium text-blue-300">
            Click to explore →
            </p>
          </div>

        </div>

        {/* Glow */}

        <div
          className="
          absolute
          inset-0
          rounded-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          shadow-[0_0_80px_rgba(59,130,246,.35)]
        "
        />

      </motion.div>

    </Link>
  );
}
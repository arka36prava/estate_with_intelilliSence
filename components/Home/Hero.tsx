"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  TrendingUp,
  Calculator,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-[150px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 pt-28 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          
        >

         <h1 className="font-extrabold leading-none text-white whitespace-nowrap">
  <span className="text-5xl lg:text-6xl">
    Find Smarter{" "}
  </span>{" "}
  <span className="text-6xl lg:text-7xl text-blue-400">
    Invest Better.
  </span>
</h1>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/properties">
              <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
                Explore Properties
              </button>
            </Link>

            <Link href="/ai">
              <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">
                Ask AI
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
        </motion.div>

      </div>
    </section>
  );
}

function HeroCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition hover:scale-105">
      <div className="mb-6 text-blue-400">{icon}</div>

      <h3 className="text-3xl font-bold text-white">{title}</h3>

      <p className="mt-2 text-slate-300">{subtitle}</p>
    </div>
  );
}
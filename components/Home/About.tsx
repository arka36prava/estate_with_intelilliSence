"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative -mt-24 overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Glow Effects */}

      <div className="absolute left-[-180px] top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[180px]" />

      <div className="absolute right-[-150px] bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Hero Fade */}

      <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-slate-950" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ========================= */}
        {/* Main Heading */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24 text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
            AI Powered Real Estate
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
              md:text-6xl
              lg:text-7xl
            "
          >
            <span className="text-white">
              Smarter Decisions.
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Better Investments.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Discover investment-ready properties with AI-powered market
            intelligence, predictive analytics, and personalized financial
            insights—all in one modern platform.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

        </motion.div>

        {/* ========================= */}
        {/* Two Column Layout */}
        {/* ========================= */}

        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >

          {/* ========================= */}
          {/* Left Image */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: .9
            }}
            className="relative"
          >

            {/* Glow */}

            <div
              className="
                absolute
                -inset-6
                rounded-[40px]
                bg-gradient-to-r
                from-blue-500/20
                to-cyan-500/20
                blur-3xl
              "
            />

            {/* Glass Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-2xl
                shadow-[0_40px_120px_rgba(0,0,0,.55)]
              "
            >

              <Image
                src="/images/About/brand_img.png"
                alt="AI Real Estate"
                width={700}
                height={700}
                className="
                  rounded-3xl
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-105
                "
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4
              }}
              className="
                absolute
                -right-8
                bottom-10
                rounded-3xl
                border
                border-white/10
                bg-slate-900/80
                px-8
                py-6
                backdrop-blur-xl
              "
            >

              <p className="text-5xl font-black text-white">
                98%
              </p>

              <p className="mt-1 text-sm text-slate-400">
                AI Prediction Accuracy
              </p>

            </motion.div>

          </motion.div>

          {/* ========================= */}
          {/* Right Content */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: .9
            }}
          >

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[4px]
                text-blue-400
              "
            >
              WHY CHOOSE US
            </span>

            <h3
              className="
                mt-5
                text-5xl
                font-black
                leading-tight
                text-white
              "
            >
              AI-Powered
              <br />
              Property Intelligence
            </h3>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-slate-400
              "
            >
               We believe buying real estate should never rely on guesswork.
              Our mission is to empower every investor with artificial
              intelligence, predictive analytics and financial intelligence
              to confidently choose the right property at the right time.
            </p>

            {/* Premium Stats Starts Here */}

                      {/* Premium Stats */}

          <div
            className="
              mt-14
              grid
              grid-cols-2
              gap-8
            "
          >
            <div>
              <h4 className="text-5xl font-black text-blue-400">
                15+
              </h4>

              <p className="mt-2 text-slate-400">
                Premium Properties
              </p>
            </div>

            <div>
              <h4 className="text-5xl font-black text-blue-400">
                AI
              </h4>

              <p className="mt-2 text-slate-400">
                Smart Assistant
              </p>
            </div>

            <div>
              <h4 className="text-5xl font-black text-blue-400">
                ROI
              </h4>

              <p className="mt-2 text-slate-400">
                Investment Analysis
              </p>
            </div>

            <div>
              <h4 className="text-5xl font-black text-blue-400">
                24/7
              </h4>

              <p className="mt-2 text-slate-400">
                AI Recommendations
              </p>
            </div>
          </div>

        </motion.div>

      </div>
      {/* ===================================================== */}
      {/* Bottom Technology & CTA Section */}
      {/* ===================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="mt-16 text-center"
      >

        <h3 className="text-3xl font-bold text-white">
          Built With Modern Technology
        </h3>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {[
            
            "Gemini AI",
            "Prisma",
            "Neon",
            "Open AI Engine",
            "Claude",
            "Clerk",
          ].map((tech) => (

            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-6
                py-3
                text-sm
                font-medium
                text-blue-300
                transition-all
                duration-300
                hover:scale-105
                hover:border-blue-400
                hover:bg-blue-500/20
              "
            >
              {tech}
            </span>

          ))}

        </div>
      </motion.div>

    </div>

  </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-white/10
      "
    >
      <div
        className="
          inline-flex
          rounded-2xl
          bg-blue-500/10
          p-3
          text-blue-400
        "
      >
        {icon}
      </div>

      <h4 className="mt-5 text-xl font-bold text-white">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}
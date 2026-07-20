"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Building2,
  TrendingUp,
} from "lucide-react";

export default function FirstImpression() {
  return (
<section className="relative overflow-hidden bg-slate-950 py-28 pb-12">

  {/* Background */}

  <div className="absolute inset-0 -z-10 overflow-hidden">

    <div className="absolute inset-0 bg-slate-950" />

    <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[180px]" />

    <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />

    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(to right,rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.08) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

  </div>

  {/* Content */}

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >

      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
        AI Powered Investment Platform
      </span>

      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
        The Future of{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Real Estate
        </span>

        <br />

        Intelligence
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
        AI Real Estate combines artificial intelligence,
        financial analytics and market intelligence to help
        investors discover high-return properties,
        predict future growth and make confident
        investment decisions.
      </p>

    </motion.div>

    {/* Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <FeatureCard
        delay={0}
        icon={<Bot size={30} />}
        title="AI Assistant"
        description="Ask natural language questions and instantly receive investment insights."
      />

      <FeatureCard
        delay={1}
        icon={<BrainCircuit size={30} />}
        title="Smart Predictions"
        description="Advanced AI predicts appreciation, rental demand and market growth."
      />

      <FeatureCard
        delay={2}
        icon={<TrendingUp size={30} />}
        title="ROI Analytics"
        description="Compare properties using financial metrics and expected returns."
      />

      <FeatureCard
        delay={3}
        icon={<Building2 size={30} />}
        title="Property Discovery"
        description="Find premium opportunities based on your investment preferences."
      />

    </div>

    {/* Mission */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mx-auto mt-28 max-w-5xl text-center"
>
  <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
    Our Mission
  </span>

  <h3
    className="
      mt-5
      text-4xl
      font-black
      bg-gradient-to-r
      from-blue-400
      via-cyan-300
      to-blue-500
      bg-clip-text
      text-transparent
    "
  >
    Data-Driven Real Estate Investing
  </h3>

  <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

  <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
    We believe buying real estate should never rely on
    guesswork. Our mission is to empower every investor
    with artificial intelligence, predictive analytics,
    financial intelligence, and real-time market insights
    to confidently choose the right property at the right
    time.
  </p>
</motion.div>

{/* AI Stats */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-14"
>

  <h3 className="text-center text-4xl font-black text-white">
    Why Investors Choose AI
  </h3>

  <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
    Intelligent analytics that help you make faster and smarter
    investment decisions.
  </p>

  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <StatCard
      number="12"
      suffix="×"
      title="Faster Analysis"
      icon="⚡"
    />

    <StatCard
      number="98"
      suffix="%"
      title="AI Accuracy"
      icon="📈"
    />

    <StatCard
      number="15"
      suffix="+"
      title="Premium Listings"
      icon="🏘"
    />

    <StatCard
      number="24"
      suffix="/7"
      title="ROI Prediction"
      icon="💰"
    />

  </div>

</motion.div>

</div>

</section>

);
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      
      className="
      relative
overflow-hidden
rounded-[30px]
border
border-white/30
bg-gradient-to-br
from-slate-100
via-white
to-blue-50
      p-8
      shadow-[0_20px_60px_rgba(0,0,0,.18)]
      transition-all
      duration-500
      hover:shadow-[0_35px_80px_rgba(37,99,235,.35)]
    "
    >
      <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/70
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                  />
      <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 0.4, 0, -0.4, 0],
                  }}
                  transition={{
                    duration: 6 + delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
        <div className="
                inline-flex
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-cyan-400
                p-4
                text-white
                shadow-lg
              ">
          {icon}
        </div>

        <h3 className="
                mt-6 text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500
                to-indigo-600 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="
                mt-4
                text-[15px]
                font-medium
                leading-7
                text-slate-700
              ">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}
function StatCard({
  icon,
  number,
  suffix,
  title,
}: {
  icon: string;
  number: string;
  suffix: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.5 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        text-center
        backdrop-blur-xl
      "
    >
      <div className="text-5xl">
        {icon}
      </div>

      <AnimatedNumber
        value={number}
        suffix={suffix}
      />

      <p className="mt-4 text-slate-300">
        {title}
      </p>

      <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </motion.div>
  );
}
function AnimatedNumber({
  value,
  suffix,
}: {
  value: string;
  suffix: string;
}) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const end = Number(value);

    const timer = setInterval(() => {

      start += 1;

      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }

    }, 20);

    return () => clearInterval(timer);

  }, [value]);

  return (

    <h2 className="mt-6 text-5xl font-black text-white">

      {count}

      {suffix}

    </h2>

  );

}
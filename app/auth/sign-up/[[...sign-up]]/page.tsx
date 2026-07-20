"use client";

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, Building2, TrendingUp } from "lucide-react";

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-3xl" />

      {/* Left Panel */}
      <section className="relative hidden w-1/2 flex-col justify-center px-16 lg:flex">
        <Link href="/" className="w-fit">
          <Image
            src="/logos/logo_dark.svg"
            alt="AI Real Estate"
            width={180}
            height={55}
            priority
          />
        </Link>

        <h1 className="mt-10 text-5xl font-bold leading-tight text-white">
          Start Investing
          <span className="block text-blue-400">
            Smarter with AI
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Create your free account to unlock AI-powered property analysis,
          investment insights, ROI predictions, affordability scoring and
          personalized recommendations.
        </p>

        <div className="mt-12 space-y-6">
          <Feature
            icon={<Building2 className="h-6 w-6 text-blue-400" />}
            title="Premium Properties"
            desc="Explore verified listings from trusted sources."
          />

          <Feature
            icon={<TrendingUp className="h-6 w-6 text-blue-400" />}
            title="ROI Predictions"
            desc="Know expected rental yield and investment potential."
          />

          <Feature
            icon={<Sparkles className="h-6 w-6 text-blue-400" />}
            title="AI Recommendations"
            desc="Receive personalized property suggestions."
          />

          <Feature
            icon={<ShieldCheck className="h-6 w-6 text-blue-400" />}
            title="Secure Account"
            desc="Protected authentication powered by Clerk."
          />
        </div>
      </section>

      {/* Right Panel */}
      <section className="relative flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <SignUp />
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-blue-500/10 p-3">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-slate-400">
          {desc}
        </p>
      </div>
    </div>
  );
}
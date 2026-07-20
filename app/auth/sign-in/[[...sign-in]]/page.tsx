"use client";

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      {/* Left */}
      <div className="relative hidden w-1/2 flex-col justify-center px-16 lg:flex">
        <Link href="/">
          <Image
            src="/logos/logo_dark.svg"
            alt="AI Real Estate"
            width={180}
            height={60}
          />
        </Link>

        <h1 className="mt-10 text-5xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
          Sign in to access AI-powered property insights, investment analysis,
          ROI predictions and your personalized dashboard.
        </p>

        <div className="mt-12 space-y-6">
          <Feature text="AI Property Analysis" />
          <Feature text="ROI & Rental Yield Prediction" />
          <Feature text="Market Intelligence" />
          <Feature text="Smart Investment Recommendations" />
        </div>
      </div>

      {/* Right */}
      <div className="relative flex flex-1 items-center justify-center p-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
          <SignIn />
        </div>
      </div>
    </main>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-3 w-3 rounded-full bg-blue-500" />
      <span className="text-lg text-slate-200">{text}</span>
    </div>
  );
}
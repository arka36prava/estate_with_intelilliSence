"use client";

import {
  TrendingUp,
  ArrowRight,
  IndianRupee,
  BrainCircuit,
  Sparkles,
  CalendarRange,
} from "lucide-react";

interface FutureGrowthProps {
  property: any;
}

export default function FutureGrowth({
  property,
}: FutureGrowthProps) {
  const currentPrice = property.price;
  const rate = property.appreciation;

  const calculateFuturePrice = (years: number) => {
    return Math.round(
      currentPrice * Math.pow(1 + rate / 100, years)
    );
  };

  

  const totalGain =
    calculateFuturePrice(5) - currentPrice;

  return (
    <section>

      {/* Heading */}

      <div className="mb-10 items-center">

        <div className="flex  gap-3">

          <TrendingUp
            className="text-orange-500 items-center"
            size={30}
          />

          <h2 className="text-3xl text-blue-600 font-bold">
            Future Growth Projection
          </h2>

        </div>

        <p className="text-indigo-400 py-3 py-2 max-w-3xl leading-7">
          AI estimates the future value of this
          property using the expected annual
          appreciation rate and long-term
          market trends.
        </p>

      </div>

      {/* Hero Card */}

      <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white p-10">

        <div className="flex flex-col lg:flex-row justify-between gap-10">

          <div>

            <div className="flex items-center gap-3">

              <BrainCircuit size={28} />

              <span className="uppercase tracking-widest">
                AI Forecast
              </span>

            </div>

            <h2 className="text-5xl font-black mt-6">
              {rate}% CAGR
            </h2>

            <p className="mt-4 text-lg opacity-90">
              Estimated annual appreciation
            </p>

          </div>

          <div className="text-center">

            <div className="text-6xl font-black">
              ₹
              {totalGain.toLocaleString("en-IN")}
            </div>

            <p className="mt-3">
              Potential value increase in 5 years
            </p>

          </div>

        </div>

      </div>

      {/* Comparison */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Left */}

        <div className="rounded-3xl border p-8">

          <h3 className="text-2xl font-bold mb-8">
            Investment Summary
          </h3>

          <Summary
            title="Current Property Price"
            value={`₹${currentPrice.toLocaleString(
              "en-IN"
            )}`}
          />

          <Summary
            title="Annual Appreciation"
            value={`${rate}%`}
          />

          <Summary
            title="Projected 5-Year Value"
            value={`₹${calculateFuturePrice(
              5
            ).toLocaleString("en-IN")}`}
          />

          <Summary
            title="Potential Gain"
            value={`₹${totalGain.toLocaleString(
              "en-IN"
            )}`}
          />

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-slate-900 text-white p-8">

          <div className="flex items-center gap-3 mb-6">

            <Sparkles
              className="text-orange-400"
            />

            <h3 className="text-2xl font-bold">
              AI Forecast
            </h3>

          </div>

          <div className="space-y-5 text-slate-300 leading-8">

            <Insight
              title="Long-Term Investment"
              text="The property shows healthy appreciation potential based on current market conditions."
            />

            <Insight
              title="Growing Locality"
              text="Infrastructure development and residential demand may positively influence future value."
            />

            <Insight
              title="Balanced Risk"
              text="Projected growth assumes relatively stable economic and real estate market conditions."
            />

            <Insight
              title="Recommendation"
              text="Suitable for investors seeking capital appreciation over the next five years."
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Summary({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b py-5">

      <span className="text-gray-500">
        {title}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}

function Insight({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>

      <h4 className="font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2">
        {text}
      </p>

    </div>
  );
}
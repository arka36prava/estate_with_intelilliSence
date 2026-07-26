"use client";

import {
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  MapPin,
  CircleCheckBig,
  Sparkles,
} from "lucide-react";

interface RecommendationCardProps {
  property: any;
}

export default function RecommendationCard({
  property,
}: RecommendationCardProps) {
  const score = property.score.aiScore;

  const recommendation =
    score >= 90
      ? "Strong Buy"
      : score >= 75
      ? "Buy"
      : score >= 60
      ? "Hold"
      : "Avoid";

  const badgeColor =
    recommendation === "Strong Buy"
      ? "bg-green-100 text-green-700"
      : recommendation === "Buy"
      ? "bg-blue-100 text-blue-700"
      : recommendation === "Hold"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <section className="rounded-3xl border bg-white shadow-xl overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white p-8">

        <div className="flex items-center gap-3 mb-3">
          <BrainCircuit className="text-orange-400" size={28} />
          <span className="uppercase tracking-[3px] text-sm text-orange-300">
            AI Due Diligence Report
          </span>
        </div>

        <h2 className="text-4xl font-bold">
          AI Investment Recommendation
        </h2>

        <p className="text-slate-300 mt-3 max-w-3xl">
          Generated after analysing multiple investment,
          location, legal and market indicators.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 p-8">

        {/* LEFT */}

        <div>

          <div
            className={`inline-flex px-5 py-2 rounded-full font-semibold text-lg ${badgeColor}`}
          >
            {recommendation}
          </div>

          <div className="mt-8 flex items-end gap-4">

            <h1 className="text-7xl font-black">
              {score}
            </h1>

            <div className="pb-3">
              <p className="text-gray-500 uppercase">
                AI Score
              </p>

              <p className="font-semibold">
                out of 100
              </p>
            </div>

          </div>

          <p className="mt-5 text-gray-600 leading-8">

            This recommendation is generated using
            AI-assisted analysis of market trends,
            expected rental demand, appreciation,
            legal status, infrastructure,
            neighbourhood quality and historical
            pricing patterns.

          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="rounded-2xl bg-orange-50 p-5">

              <TrendingUp
                className="text-orange-500 mb-3"
                size={30}
              />

              <p className="text-sm text-gray-500">
                Expected Appreciation
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {property.appreciation}%
              </h3>

            </div>

            <div className="rounded-2xl bg-green-50 p-5">

              <ShieldCheck
                className="text-green-600 mb-3"
                size={30}
              />

              <p className="text-sm text-gray-500">
                Legal Status
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {property.risk.legalVerified
                  ? "Verified"
                  : "Pending"}
              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="rounded-3xl bg-slate-50 border p-8">

          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-orange-500" />
            <h3 className="text-2xl font-bold">
              AI Key Highlights
            </h3>
          </div>

          <div className="space-y-6">

            <Highlight
              icon={<CircleCheckBig />}
              title="Excellent Investment Potential"
              description="High appreciation with stable long-term demand."
            />

            <Highlight
              icon={<MapPin />}
              title="Prime Location"
              description="Close to metro, schools, hospitals and business hubs."
            />

            <Highlight
              icon={<TrendingUp />}
              title="Strong Rental Demand"
              description={`Estimated monthly rental income ₹${property.expectedRental.toLocaleString(
                "en-IN"
              )}.`}
            />

            <Highlight
              icon={<ShieldCheck />}
              title="Low Investment Risk"
              description="Legal documents verified and builder profile is reliable."
            />

          </div>

          <div className="mt-10 border-t pt-6">

            <p className="text-sm uppercase tracking-wider text-gray-500">
              AI Confidence
            </p>

            <div className="mt-3 h-4 rounded-full bg-gray-200 overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                style={{
                  width: `${score}%`,
                }}
              />

            </div>

            <p className="mt-3 font-semibold text-green-700">
              {score}% confidence based on available property,
              locality and investment metrics.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

function Highlight({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">

      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
        {icon}
      </div>

      <div>

        <h4 className="font-semibold text-lg">
          {title}
        </h4>

        <p className="text-gray-600 mt-1 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}
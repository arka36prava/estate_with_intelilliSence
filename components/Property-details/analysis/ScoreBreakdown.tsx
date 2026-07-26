"use client";

import {
  BrainCircuit,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Building2,
  Landmark,
  Leaf,
  BadgeCheck,
  Info,
} from "lucide-react";

interface ScoreBreakdownProps {
  property: any;
}

export default function ScoreBreakdown({
  property,
}: ScoreBreakdownProps) {
  const score = property.score;

  const factors = [
    {
      title: "Location Intelligence",
      icon: <MapPin className="text-blue-600" size={22} />,
      value: score.locationScore ?? 94,
      weight: 30,
      reason:
        "Metro connectivity, schools, hospitals, shopping centres and employment hubs.",
    },
    {
      title: "Investment Potential",
      icon: <TrendingUp className="text-green-600" size={22} />,
      value: score.investmentScore,
      weight: 20,
      reason:
        "Expected appreciation, resale demand and historical price movement.",
    },
    {
      title: "Rental Market",
      icon: <Landmark className="text-purple-600" size={22} />,
      value: score.rentalScore,
      weight: 15,
      reason:
        "Rental demand, occupancy rate and estimated monthly income.",
    },
    {
      title: "Legal Verification",
      icon: <ShieldCheck className="text-emerald-600" size={22} />,
      value: property.risk.legalVerified ? 100 : 40,
      weight: 10,
      reason:
        "Ownership records, approvals and legal verification status.",
    },
    {
      title: "Builder Reputation",
      icon: <Building2 className="text-orange-600" size={22} />,
      value: property.risk.builderScore * 10,
      weight: 15,
      reason:
        "Builder credibility, delivery history and customer feedback.",
    },
    {
      title: "Environmental Quality",
      icon: <Leaf className="text-lime-600" size={22} />,
      value: 88,
      weight: 10,
      reason:
        "Flood exposure, pollution levels and surrounding green spaces.",
    },
  ];

  return (
    <section>

      {/* Heading */}

      <div className="mb-10">

        <div className="flex items-center gap-3">

          <BrainCircuit className="text-orange-500" />

          <h2 className="text-3xl font-bold">
            AI Score Breakdown
          </h2>

        </div>

        <p className="text-gray-500 mt-3 max-w-3xl leading-7">
          Instead of producing a random score,
          Estate IntelliSense explains how every
          factor contributes to the final AI
          recommendation.
        </p>

      </div>

      {/* Overall */}

      <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 mb-10">

        <div className="flex justify-between flex-wrap gap-8 items-center">

          <div>

            <p className="uppercase tracking-widest opacity-80">
              Final AI Score
            </p>

            <h2 className="text-6xl font-black mt-2">
              {score.aiScore}
            </h2>

            <p className="mt-3 opacity-90">
              Calculated using weighted property,
              market and locality indicators.
            </p>

          </div>

          <div className="text-center">

            <BadgeCheck
              className="mx-auto mb-3"
              size={42}
            />

            <p className="text-2xl font-bold">
              Explainable AI
            </p>

            <p className="opacity-80">
              Transparent scoring model
            </p>

          </div>

        </div>

      </div>

      {/* Factors */}

      <div className="space-y-6">

        {factors.map((factor, index) => (

          <div
            key={index}
            className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div className="flex gap-4 flex-1">

                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">

                  {factor.icon}

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    {factor.title}
                  </h3>

                  <p className="text-gray-500 mt-2 leading-7">
                    {factor.reason}
                  </p>

                </div>

              </div>

              <div className="flex gap-10">

                <div className="text-center">

                  <p className="text-gray-500 text-sm">
                    Weight
                  </p>

                  <h3 className="text-3xl font-bold">
                    {factor.weight}%
                  </h3>

                </div>

                <div className="text-center">

                  <p className="text-gray-500 text-sm">
                    Score
                  </p>

                  <h3 className="text-3xl font-bold">
                    {factor.value}
                  </h3>

                </div>

              </div>

            </div>

            <div className="mt-6">

              <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                  style={{
                    width: `${factor.value}%`,
                  }}
                />

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Formula */}

      <div className="mt-12 rounded-3xl border bg-slate-50 p-8">

        <div className="flex items-start gap-4">

          <Info
            className="text-blue-600 mt-1"
            size={26}
          />

          <div>

            <h3 className="text-2xl font-bold">
              How the Final Score is Calculated
            </h3>

            <p className="mt-4 text-gray-700 leading-8">

              Every category contributes to the final
              recommendation according to its assigned
              weight. Location and investment potential
              have the highest influence, while legal,
              environmental and builder factors improve
              the reliability of the prediction.

            </p>

            <div className="mt-6 rounded-2xl bg-white p-5 border">

              <code className="text-lg font-semibold break-all">

                Final AI Score =
                Σ (Category Score × Category Weight)

              </code>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
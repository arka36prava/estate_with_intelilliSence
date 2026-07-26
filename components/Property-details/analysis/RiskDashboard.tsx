"use client";

import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  TrendingDown,
  Waves,
  Building2,
  Scale,
  RefreshCw,
} from "lucide-react";

interface RiskDashboardProps {
  property: any;
}

export default function RiskDashboard({
  property,
}: RiskDashboardProps) {
  const risk = property.risk;

  const risks = [
    {
      title: "Legal Risk",
      value: risk.legalVerified ? "Low" : "High",
      score: risk.legalVerified ? 2 : 9,
      icon: <Scale size={22} />,
      description:
        risk.legalVerified
          ? "Property documents are verified."
          : "Legal verification pending.",
    },
    {
      title: "Flood Risk",
      value:
        risk.floodRisk <= 3
          ? "Low"
          : risk.floodRisk <= 6
          ? "Moderate"
          : "High",
      score: risk.floodRisk,
      icon: <Waves size={22} />,
      description:
        "Estimated using environmental and locality information.",
    },
    {
      title: "Crime Risk",
      value:
        risk.crimeScore <= 3
          ? "Low"
          : risk.crimeScore <= 6
          ? "Moderate"
          : "High",
      score: risk.crimeScore,
      icon: <ShieldAlert size={22} />,
      description:
        "Based on neighbourhood safety indicators.",
    },
    {
      title: "Builder Risk",
      value:
        risk.builderScore >= 8
          ? "Low"
          : risk.builderScore >= 6
          ? "Moderate"
          : "High",
      score: 10 - risk.builderScore,
      icon: <Building2 size={22} />,
      description:
        "Calculated from builder reputation and delivery history.",
    },
    {
      title: "Market Risk",
      value:
        risk.marketRisk <= 3
          ? "Low"
          : risk.marketRisk <= 6
          ? "Moderate"
          : "High",
      score: risk.marketRisk,
      icon: <TrendingDown size={22} />,
      description:
        "Represents expected market volatility.",
    },
    {
      title: "Resale Risk",
      value:
        risk.resaleScore >= 8
          ? "Low"
          : risk.resaleScore >= 6
          ? "Moderate"
          : "High",
      score: 10 - risk.resaleScore,
      icon: <RefreshCw size={22} />,
      description:
        "Measures future resale potential.",
    },
  ];

  const overall =
    risk.overallRisk <= 3
      ? "Low"
      : risk.overallRisk <= 6
      ? "Moderate"
      : "High";

  const badge =
    overall === "Low"
      ? "bg-green-100 text-green-700"
      : overall === "Moderate"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <section>

      <div className="mb-10 text-center">

        <h2 className="text-3xl text-blue-700 font-bold">
          Risk Dashboard
        </h2>

        <p className="text-indigo-400 mt-2">
          AI evaluates legal, environmental, market,
          builder and resale risks before generating
          an investment recommendation.
        </p>

      </div>

      {/* Overall */}

      <div className="rounded-3xl bg-slate-900 text-white p-8 mb-10">

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">

          <div>

            <h3 className="text-3xl font-bold">
              Overall Investment Risk
            </h3>

            <p className="text-slate-300 mt-3 max-w-2xl">
              The AI combines multiple risk indicators
              into a single investment assessment to
              highlight potential concerns before
              purchasing.
            </p>

          </div>

          <div
            className={`px-8 py-4 rounded-full text-xl font-bold ${badge}`}
          >
            {overall} Risk
          </div>

        </div>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {risks.map((item, index) => {

          const color =
            item.value === "Low"
              ? "text-green-600"
              : item.value === "Moderate"
              ? "text-yellow-600"
              : "text-red-600";

          return (
            <div
              key={index}
              className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
            >

              <div className="flex justify-between items-center">

                <div className={color}>
                  {item.icon}
                </div>

                <span
                  className={`font-semibold ${color}`}
                >
                  {item.value}
                </span>

              </div>

              <h3 className="text-xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                {item.description}
              </p>

              <div className="mt-8">

                <div className="flex justify-between mb-2 text-sm">

                  <span>Risk Level</span>

                  <span>{item.score}/10</span>

                </div>

                <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

                  <div
                    className={`h-full rounded-full ${
                      item.score <= 3
                        ? "bg-green-500"
                        : item.score <= 6
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${item.score * 10}%`,
                    }}
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Summary */}

      <div className="mt-10 rounded-3xl bg-green-50 border border-green-200 p-8">

        <div className="flex gap-4">

          <ShieldCheck
            className="text-green-600 mt-1"
            size={28}
          />

          <div>

            <h3 className="text-2xl font-bold">
              AI Risk Summary
            </h3>

            <p className="text-gray-700 mt-3 leading-8">

              This property presents
              <span className="font-semibold text-green-700">
                {" "}low investment risk{" "}
              </span>
              because of verified legal documentation,
              strong builder credibility, healthy resale
              potential and favorable market conditions.
              Environmental and neighbourhood indicators
              also support long-term investment.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
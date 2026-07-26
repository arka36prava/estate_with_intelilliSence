"use client";

import {
  BadgeCheck,
  ShieldCheck,
  MapPinned,
  Building2,
  Landmark,
  TrendingUp,
  AlertTriangle,
  Trees,
  Hospital,
  TrainFront,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

interface DueDiligenceProps {
  property: any;
}

export default function DueDiligence({
  property,
}: DueDiligenceProps) {
  const checks = [
    {
      icon: <BadgeCheck className="text-green-600" size={24} />,
      title: "Legal Verification",
      status: property.risk.legalVerified ? "Verified" : "Pending",
      description:
        "Ownership documents and approvals were checked.",
      color: property.risk.legalVerified
        ? "bg-green-50 border-green-200"
        : "bg-red-50 border-red-200",
    },

    {
      icon: <Building2 className="text-blue-600" size={24} />,
      title: "Builder Reputation",
      status: `${property.risk.builderScore}/10`,
      description:
        "Calculated using project delivery history and customer reviews.",
      color: "bg-blue-50 border-blue-200",
    },

    {
      icon: <TrendingUp className="text-orange-600" size={24} />,
      title: "Price Appreciation",
      status: `${property.appreciation}% / year`,
      description:
        "Estimated from historical locality price trends.",
      color: "bg-orange-50 border-orange-200",
    },

    {
      icon: <Landmark className="text-purple-600" size={24} />,
      title: "Rental Demand",
      status: `₹${property.expectedRental.toLocaleString(
        "en-IN"
      )}/month`,
      description:
        "Predicted monthly rental income in this locality.",
      color: "bg-purple-50 border-purple-200",
    },

    {
      icon: <ShieldCheck className="text-green-700" size={24} />,
      title: "Crime Risk",
      status:
        property.risk.crimeScore <= 3
          ? "Low"
          : property.risk.crimeScore <= 6
          ? "Medium"
          : "High",
      description:
        "Neighbourhood safety assessment.",
      color: "bg-green-50 border-green-200",
    },

    {
      icon: <Trees className="text-emerald-600" size={24} />,
      title: "Flood Risk",
      status:
        property.risk.floodRisk <= 3
          ? "Low"
          : property.risk.floodRisk <= 6
          ? "Moderate"
          : "High",
      description:
        "Flood exposure estimation.",
      color: "bg-cyan-50 border-cyan-200",
    },

    {
      icon: <Hospital className="text-red-500" size={24} />,
      title: "Healthcare Access",
      status: "Nearby",
      description:
        "Hospitals available within a short driving distance.",
      color: "bg-red-50 border-red-200",
    },

    {
      icon: <TrainFront className="text-indigo-600" size={24} />,
      title: "Connectivity",
      status: "Excellent",
      description:
        "Metro, highways and public transport nearby.",
      color: "bg-indigo-50 border-indigo-200",
    },
     // three card will come here in line  
  ];

  return (
    <section className="mt-0">

      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white p-6 mb-10">

        <div className="flex flex-wrap justify-between gap-8">

          <div>

            <h3 className="text-2xl font-bold">
              AI analysed multiple investment signals
            </h3>

            <p className="text-slate-300 mt-3 max-w-3xl">
              Instead of generating a random score,
              Estate IntelliSense evaluates legal
              verification, builder quality,
              infrastructure, rental demand,
              appreciation, environmental risk and
              neighbourhood indicators before
              generating an investment recommendation.
            </p>

          </div>

          <div className="text-center">

            <div className="text-6xl font-black text-orange-400">
              32+
            </div>

            <p className="uppercase tracking-wider text-sm text-slate-300">
              Parameters Analysed
            </p>

          </div>

        </div>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {checks.map((item, index) => (

          <div
            key={index}
            className={`rounded-3xl border p-6 shadow-sm hover:shadow-lg transition ${item.color}`}
          >

            <div className="flex justify-between items-start">

              {item.icon}

              <CheckCircle2
                className="text-green-500"
                size={20}
              />

            </div>

            <h3 className="font-bold text-lg mt-6">
              {item.title}
            </h3>

            <p className="text-2xl font-bold mt-3">
              {item.status}
            </p>

            <p className="text-sm text-gray-600 mt-4 leading-6">
              {item.description}
            </p>

          </div>

        ))}

      </div>

      {/* Transparency */}

      <div className="mt-12 rounded-3xl border bg-amber-50 border-amber-200 p-8">

        <div className="flex gap-4">

          <AlertTriangle
            className="text-amber-600 mt-1"
            size={26}
          />

          <div>

            <h3 className="font-bold text-xl">
              Transparency Notice
            </h3>

            <p className="text-gray-700 mt-3 leading-8">

              AI recommendations are decision-support
              insights, not financial or legal advice.
              Predictions are generated using available
              property attributes, historical trends and
              market indicators. Actual investment
              performance may vary due to market
              conditions and future developments.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
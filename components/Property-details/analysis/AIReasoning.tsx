"use client";

import {
  BrainCircuit,
  Sparkles,
  CircleCheckBig,
  TriangleAlert,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

interface AIReasoningProps {
  property: any;
}

export default function AIReasoning({
  property,
}: AIReasoningProps) {
  const score = property.score.aiScore;

  const recommendation =
    score >= 90
      ? "Strong Buy"
      : score >= 75
      ? "Buy"
      : score >= 60
      ? "Hold"
      : "Avoid";

  const strengths = [
    "Prime location with strong infrastructure.",
    "Healthy rental demand from professionals and families.",
    "Expected long-term appreciation is above market average.",
    "Verified legal documentation reduces investment uncertainty.",
    "Builder has a reliable delivery history.",
  ];

  const concerns = [
    "Property prices may fluctuate with market cycles.",
    "Future appreciation depends on upcoming infrastructure projects.",
    "Maintenance charges should be considered while calculating ROI.",
    "AI May be wrong cheak all the conditions mannually or physically before investing"
  ];

  return (
    <section className="mt-16">

      {/* Heading */}

      <div className="text-center mb-12">

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">

          <BrainCircuit size={18} />

          AI Final Reasoning

        </div>

        <h2 className="text-4xl text-blue-700 font-bold mt-5">
          Why the AI Recommended This Property
        </h2>

        <p className="text-indigo-400 mt-4 max-w-3xl mx-auto leading-8">
          The recommendation below summarizes the AI's reasoning
          after evaluating property fundamentals, market trends,
          locality quality, rental demand and investment risks.
        </p>

      </div>

      {/* Main Card */}

      

      {/* Strengths & Concerns */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Strengths */}

        <div className="rounded-3xl border bg-green-50 border-green-200 p-8">

          <div className="flex items-center gap-3 mb-8">

            <CircleCheckBig
              className="text-green-600"
            />

            <h3 className="text-2xl font-bold">
              Key Strengths
            </h3>

          </div>

          <div className="space-y-5">

            {strengths.map((item, index) => (

              <div
                key={index}
                className="flex gap-3"
              >

                <CircleCheckBig
                  className="text-green-600 mt-1 flex-shrink-0"
                  size={18}
                />

                <p className="leading-7">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Concerns */}

        <div className="rounded-3xl border bg-amber-50 border-amber-200 p-8">

          <div className="flex items-center gap-3 mb-8">

            <TriangleAlert
              className="text-amber-600"
            />

            <h3 className="text-2xl font-bold">
              Consider Before Buying
            </h3>

          </div>

          <div className="space-y-5">

            {concerns.map((item, index) => (

              <div
                key={index}
                className="flex gap-3"
              >

                <TriangleAlert
                  className="text-amber-600 mt-1 flex-shrink-0"
                  size={18}
                />

                <p className="leading-7">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Recommendation Grid */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <RecommendationCard
          icon={<Users />}
          title="Best For"
          value="Families & Long-Term Investors"
        />

        <RecommendationCard
          icon={<Target />}
          title="Investment Horizon"
          value="5–10 Years"
        />

        <RecommendationCard
          icon={<ArrowRight />}
          title="AI Verdict"
          value={recommendation}
        />

      </div>

    </section>
  );
}

function RecommendationCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition">

      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
        {icon}
      </div>

      <p className="text-gray-500 mt-5">
        {title}
      </p>

      <h3 className="text-xl font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}
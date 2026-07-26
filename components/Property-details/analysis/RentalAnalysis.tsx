"use client";

import {
  IndianRupee,
  TrendingUp,
  Wallet,
  Building2,
  CalendarDays,
  Percent,
} from "lucide-react";

interface RentalAnalysisProps {
  property: any;
}

export default function RentalAnalysis({
  property,
}: RentalAnalysisProps) {

  const price = property.price;
  const monthlyRent = property.expectedRental;

  const yearlyRent = monthlyRent * 12;

  const rentalYield = (
    (yearlyRent / price) *
    100
  ).toFixed(2);

  const occupancy = 94;

  const vacancy = 18;

  const payback = (
    price / yearlyRent
  ).toFixed(1);

  return (
    <section>

      {/* Heading */}

      <div className="text-center mb-10">

        <h2 className="text-3xl text-blue-700 font-bold">
          Rental Investment Analysis
        </h2>

        <p className="text-indigo-400 mt-2">
          CashFlow ,Projection Growth, Rental-Yield and Insights
        </p>

      </div>

      {/* Detailed Report */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Left */}

        <div className="rounded-3xl border bg-white p-8 shadow-sm">

          <h3 className="text-2xl font-bold mb-8">
            Cash Flow Projection
          </h3>

          <div className="space-y-6">

            <Row
              title="Monthly Rental Income"
              value={`₹${monthlyRent.toLocaleString("en-IN")}`}
            />

            <Row
              title="Annual Rental Income"
              value={`₹${yearlyRent.toLocaleString("en-IN")}`}
            />

            <Row
              title="Rental Yield"
              value={`${rentalYield}%`}
            />

            <Row
              title="Expected Vacancy"
              value={`${vacancy} days/year`}
            />

            <Row
              title="Occupancy"
              value={`${occupancy}%`}
            />

            <Row
              title="Investment Payback"
              value={`${payback} years`}
            />

          </div>

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-slate-900 text-white p-8">

          <div className="flex items-center gap-3 mb-6">

            <Building2 className="text-orange-400" />

            <h3 className="text-2xl font-bold">
              AI Rental Insights
            </h3>

          </div>

          <div className="space-y-5 text-slate-300 leading-8">

            <Insight
              title="Strong Rental Demand"
              description="Nearby business districts and educational institutions support consistent tenant demand."
            />

            <Insight
              title="Low Vacancy Risk"
              description="Properties in this locality typically remain occupied for most of the year."
            />

            <Insight
              title="Healthy Rental Yield"
              description={`Estimated rental yield of ${rentalYield}% aligns well with premium residential investments.`}
            />

            <Insight
              title="Suitable For"
              description="Long-term investors seeking recurring monthly income with appreciation potential."
            />

          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">

            <div className="flex justify-between">

              <span>AI Confidence</span>

              <span className="font-bold">
                {property.score.aiScore}%
              </span>

            </div>

            <div className="mt-3 h-3 rounded-full bg-white/20 overflow-hidden">

              <div
                className="h-full rounded-full bg-orange-400"
                style={{
                  width: `${property.score.aiScore}%`,
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Card({
  icon,
  title,
  value,
  subtitle,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}) {
  return (
    <div className={`${color} rounded-3xl p-6 border`}>

      <div className="mb-6 text-orange-600">
        {icon}
      </div>

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}

function Row({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-4">

      <span className="text-gray-600">
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
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>

      <h4 className="font-semibold text-white">
        {title}
      </h4>

      <p className="mt-1">
        {description}
      </p>

    </div>
  );
}
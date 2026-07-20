"use client";

import MetricCard from "./MetricCard";
import PropertyCard from "./PropertyCard";

interface InvestmentReportProps {

  report: {

    recommendation: string;

    property: {

      id: string;
      title: string;
      city: string;
      locality: string;
      price: number;
      bedrooms: number;
      bathrooms: number;
      area: number;
      expectedRental?: number;
      appreciation?: number;
      image?: string;

    };

    affordability: {

      affordabilityScore: number;

    };

    emi: {

      emi: number;
      totalInterest: number;
      totalPayment: number;

    };

    roi: number;

    rentalYield: {

      rentalYield: number;

    };

  };

}

export default function InvestmentReport({

  report,

}: InvestmentReportProps) {

  return (

    <div className="mx-auto max-w-5xl space-y-8">

      <PropertyCard

        property={report.property}

      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <MetricCard
          title="ROI"
          value={
  report.roi !== undefined
    ? `${report.roi.toFixed(2)}%`
    : "N/A"
}
          subtitle="Return on Investment"
        />

        <MetricCard
          title="Rental Yield"
          value={
  report.rentalYield?.rentalYield !== undefined
    ? `${report.rentalYield.rentalYield.toFixed(2)}%`
    : "N/A"
}
          subtitle="Gross Rental Yield"
        />

        <MetricCard
          title="Monthly EMI"
          value={
  report.emi?.emi !== undefined
    ? `₹${report.emi.emi.toLocaleString("en-IN")}`
    : "N/A"
}
          subtitle="Loan EMI"
        />

        <MetricCard
          title="Affordability"
          value={
  report.affordability?.affordabilityScore !== undefined
    ? `${report.affordability.affordabilityScore}/100`
    : "N/A"
}
          subtitle="AI Score"
        />

      </div>

      <div className="rounded-xl border bg-card p-6">

        <h2 className="mb-3 text-xl font-bold">

          AI Recommendation

        </h2>

        <p className="leading-8 text-muted-foreground">

          {report.recommendation}

        </p>

      </div>

    </div>

  );

}
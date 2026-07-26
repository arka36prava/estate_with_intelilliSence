"use client";

//import RecommendationCard from "./RecommendationCard";
import DueDiligence from "./DueDiligence";
import RentalAnalysis from "./analysis/RentalAnalysis";
import FutureGrowth from "./analysis/FutureGrowth";
import RiskDashboard from "./analysis/RiskDashboard";
import ScoreBreakdown from "./analysis/ScoreBreakdown";
import AIReasoning from "./analysis/AIReasoning";
import EMICalculator from "./emi/EmiCalculator";
//import PropertyMap from "./Map";
import NearbyPlaces from "./NearbyPlaces";
import SimilarPropertiesProps from "./SimilarProperties";
import dynamic from "next/dynamic";

const PropertyMap = dynamic(
  () => import("./Map"),
  {
    ssr: false,
  }
);
interface AIInvestmentProps {
  property: any;
}

export default function AIInvestment({
  property,
}: AIInvestmentProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">

      {/* Section Heading */}
      <div className="text-center">

        <h2 className="mt-6 text-5xl text-blue-700 font-bold tracking-tight">
          AI Property Diligence Report Through AI Analysis
        </h2>

      </div>

      {/* 1 */}
      {/*<RecommendationCard property={property} />*/}

      {/* 2 */}
      <DueDiligence property={property} />

      {/* 3 */}
      <RentalAnalysis property={property} />

      {/* 4 */}
      <FutureGrowth property={property} />

      {/* 5 */}
      <RiskDashboard property={property} />

      {/* 6 */}
      {/*<ScoreBreakdown property={property} />*/}

      {/* 7 */}
      <AIReasoning property={property} />
      
      {/*Emi Calculator*/}
      <EMICalculator property={property} />

      {/* 8.NearBy places*/}
      <NearbyPlaces />

     {/* 9.Map*/}
       <PropertyMap
        latitude={property.latitude}
        longitude={property.longitude}
        title={property.title}
        address={property.address}
        />
        
      {/* 10.Related props to dispaly*/}
       {/* <SimilarPropertiesProps property={property} /> */}
    </section>
  );
}
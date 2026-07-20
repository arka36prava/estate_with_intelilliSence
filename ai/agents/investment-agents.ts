import { generateText } from "ai";
import { google } from "../services/gemini";

import { INVESTMENT_PROMPT } from "../prompts/investment";

import { searchProperties } from "../tools/property-search";
import { calculateEMI } from "../tools/emi-calculator";
import { calculateROI } from "../tools/roi-calculator";

import type { InvestmentInput } from "../types/investment";
import { calculateAffordability } from "../tools/affordability";
import { calculateRentalYield } from "../tools/rental-yield";


export async function investmentAgent(input: InvestmentInput) {

  // 1. Search matching properties
  const properties = await searchProperties(
    input.city,
    input.budget ?? undefined
  );

  if (!properties.length) {
    return {
      recommendation: "No matching properties found.",
      properties: [],
    };
  }

  // 2. Select best property for now
  // Later we'll compare the top 5 properties
  const property = properties[0];

  // 3. Loan Calculation
  const downPayment = input.downPayment ?? 0;

  const loanAmount = Math.max(
    Number(property.price) - downPayment,
    0
  );

  // 4. EMI Calculation
  const emi = calculateEMI(
    loanAmount,
    input.annualInterestRate ?? 8.5,
    input.loanTenureYears ?? 20
  );

  // 5. ROI Calculation
  const roi = calculateROI(
    Number(property.price),
    Number(property.expectedRental ?? 0),
    Number(property.price) * 1.15 // Temporary assumption
  );
  //6. cheaking affordiability
  const affordability = calculateAffordability({
  monthlyIncome: input.monthlyIncome ?? 120000,
  monthlyEMI: input.monthlyEMI ?? 0,
  downPayment: input.downPayment ?? 0,
  annualInterestRate: input.annualInterestRate ?? 8.5,
  loanTenureYears: input.loanTenureYears ?? 20,
});

 const rentalYield = calculateRentalYield({
  propertyPrice: Number(property.price),
  monthlyRent: Number(property.expectedRental ?? 0),
  });

  

  // 8. Ask Gemini for reasoning
//   const { text } = await generateText({
//     model: google("gemini-3.5-flash"),

//     system: INVESTMENT_PROMPT,

//     prompt: `
// USER REQUIREMENTS

// ${JSON.stringify(input, null, 2)}

// ----------------------------------------

// PROPERTY DETAILS

// ${JSON.stringify(property, null, 2)}

// ----------------------------------------

// FINANCIAL ANALYSIS

// Loan Amount:
// ₹${loanAmount}

// EMI:
// ${JSON.stringify(emi, null, 2)}

// Expected ROI:
// ${roi}%

// ----------------------------------------

// TASK

// You are a professional Real Estate Investment Advisor.

// Analyze the supplied property.

// Explain:

// 1. Why this property matches the user's needs.
// 2. Monthly EMI.
// 3. Expected ROI.
// 4. Rental Yield.
// 5. Investment Risks.
// 6. Future Appreciation Potential.
// 7. Overall Investment Score out of 100.

// Do NOT invent property data.

// Use only the supplied information.
// `,
//   });

     //Mock Return 
     const text = `
🏡 Investment Analysis Report

Recommended Property:
${property.title}

Location:
${property.locality}, ${property.city}

Property Price:
₹${Number(property.price).toLocaleString("en-IN")}

Expected Monthly Rent:
₹${Number(property.expectedRental).toLocaleString("en-IN")}

Monthly EMI:
₹${emi.emi.toLocaleString("en-IN")}

Rental Yield:
${rentalYield.rentalYield}%

ROI:
${roi.toFixed(2)}%

Affordability Score:
${affordability.affordabilityScore}/100

Recommendation:
This property is a good long-term investment due to its strong rental demand, healthy appreciation, and favorable affordability.
`;


  return {
    recommendation: text,
    property,
    loanAmount,
    emi,
    roi,
    affordability,
    rentalYield,
  };

  
}
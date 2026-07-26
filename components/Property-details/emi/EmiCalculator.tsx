"use client";

import { useMemo, useState } from "react";
import PaymentChart from "./PaymentChart";
import PaymentBreakdown from "./PaymentBreakdown";
import AIInsights from "./AIInsights";

interface Property {
  price: number;
}

interface EMICalculatorProps {
  property: Property;
}

export default function EMICalculator({
  property,
}: EMICalculatorProps) {

  /* ===========================
     STATES
  ============================ */

  const [propertyPrice, setPropertyPrice] = useState(property.price);

  const [downPayment, setDownPayment] = useState(
    property.price * 0.2
  );

  const [interestRate, setInterestRate] = useState(8.5);

  const [loanYears, setLoanYears] = useState(20);

  /* ===========================
      CALCULATIONS
  ============================ */

 
  const {
    loanAmount,
    monthlyEMI,
    totalInterest,
    totalPayment,
  } = useMemo(() => {
    const loanAmount = Math.max(propertyPrice - downPayment, 0);
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = loanYears * 12;

    const monthlyEMI =
    monthlyRate === 0
    ? loanAmount / totalMonths
    : loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalMonths) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = monthlyEMI * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      loanAmount,
      monthlyEMI,
      totalInterest,
      totalPayment,
    };
  }, [propertyPrice, downPayment, interestRate, loanYears]);

  /* ===========================
      UI
  ============================ */

  return (

<section className="max-w-7xl mx-auto px-8 py-0">

    <div className="mb-12 text-center">

        <h2 className=" text-4xl text-center text-blue-700 font-bold">

            Home Loan EMI Calculator

        </h2>

        <p className="text-center text-indigo-400 mt-3">

            Estimate your monthly EMI,  payable interest, total repayment, Loan Amount, etc.

        </p>

    </div>

    <div className="bg-white rounded-3xl border shadow-sm p-8 sticky top-24">

        {/* LEFT PANEL */}

        <div className="bg-white rounded-3xl border shadow-sm p-8">

    <h3 className="text-2xl font-bold mb-8">
        Loan Details
    </h3>

    {/* Property Price */}

    <div className="mb-6">

        <label className="block font-medium mb-2">
            Property Price
        </label>

        <input
            type="number"
            value={propertyPrice}
            onChange={(e)=>setPropertyPrice(Number(e.target.value))}
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-orange-500"
        />

    </div>

    {/* Down Payment */}

    <div className="mb-6">

        <label className="block font-medium mb-2">
            Down Payment
        </label>

        <input
            type="number"
            value={downPayment}
            onChange={(e)=>setDownPayment(Number(e.target.value))}
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-orange-500"
        />

    </div>

    {/* Interest */}

    <div className="mb-6">

        <label className="block font-medium mb-2">
            Interest Rate (%)
        </label>

        <input
            type="number"
            step="0.1"
            min={0}
            value={interestRate}
            onChange={(e)=>setInterestRate(Number(e.target.value))}
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-orange-500"
        />

    </div>

    {/* Tenure */}

    <div className="mb-6">

        <label className="block font-medium mb-2">
            Loan Tenure (Years)
        </label>

        <input
            type="number"
            value={loanYears}
            min={1}
            onChange={(e)=>setLoanYears(Number(e.target.value))}
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-orange-500"
        />

    </div>

    {/* Loan Amount */}

    <div className="rounded-2xl bg-orange-50 border border-orange-200 p-5">

        <p className="text-gray-500">
            Loan Amount
        </p>

        <h2 className="text-3xl font-bold mt-2">

            ₹{loanAmount.toLocaleString("en-IN")}

        </h2>

    </div>

</div>

        {/* RIGHT PANEL */}

        <div className="space-y-6">

    {/* EMI */}

    <div className="grid grid-cols-2 gap-5">

        <div className="rounded-3xl bg-white border p-6 shadow-sm">

            <p className="text-gray-500">
                Monthly EMI
            </p>

            <h2 className="text-3xl font-bold mt-3">

                ₹{Math.round(monthlyEMI).toLocaleString("en-IN")}

            </h2>

        </div>

        <div className="rounded-3xl bg-white border p-6 shadow-sm">

            <p className="text-gray-500">
                Loan Amount
            </p>

            <h2 className="text-3xl font-bold mt-3">

                ₹{loanAmount.toLocaleString("en-IN")}

            </h2>

        </div>

    </div>

    {/* Second Row */}

    <div className="grid grid-cols-2 gap-5">

        <div className="rounded-3xl bg-white border p-6 shadow-sm">

            <p className="text-gray-500">
                Total Interest
            </p>

            <h2 className="text-3xl font-bold mt-3">

                ₹{totalInterest.toLocaleString("en-IN")}

            </h2>

        </div>

        <div className="rounded-3xl bg-white border p-6 shadow-sm">

            <p className="text-gray-500">
                Total Payment
            </p>

            <h2 className="text-3xl font-bold mt-3">

                ₹{totalPayment.toLocaleString("en-IN")}

            </h2>

        </div>

    </div>

    {/* Loan Summary */}

    <div className="rounded-3xl bg-slate-900 text-white p-8">

        <h3 className="text-2xl font-bold mb-8">

            Loan Summary

        </h3>

        <SummaryRow
            title="Property Price"
            value={`₹${propertyPrice.toLocaleString("en-IN")}`}
        />

        <SummaryRow
            title="Down Payment"
            value={`₹${downPayment.toLocaleString("en-IN")}`}
        />

        <SummaryRow
            title="Loan Amount"
            value={`₹${loanAmount.toLocaleString("en-IN")}`}
        />

        <SummaryRow
            title="Interest Rate"
            value={`${interestRate}%`}
        />

        <SummaryRow
            title="Loan Tenure"
            value={`${loanYears} Years`}
        />

        <SummaryRow
            title="Monthly EMI"
            value={`₹${monthlyEMI.toLocaleString("en-IN")}`}
        />

    </div>

    <div className="mt-12 grid xl:grid-cols-2 gap-8">
  <PaymentChart
    loanAmount={loanAmount}
    totalInterest={totalInterest}
  />

  <PaymentBreakdown
    propertyPrice={propertyPrice}
    downPayment={downPayment}
    loanAmount={loanAmount}
    interestRate={interestRate}
    loanYears={loanYears}
    monthlyEMI={monthlyEMI}
    totalInterest={totalInterest}
    totalPayment={totalPayment}
  />
</div>

<div className="mt-8">
  <AIInsights
    loanAmount={loanAmount}
    totalInterest={totalInterest}
    propertyPrice={propertyPrice}
    downPayment={downPayment}
  />
</div>

</div>

    </div>

</section>

);
}
function SummaryRow({
    title,
    value,
}:{
    title:string;
    value:string;
}){

    return(

        <div className="flex justify-between py-4 border-b border-slate-700 last:border-none">

            <span className="text-slate-300">
                {title}
            </span>

            <span className="font-semibold">
                {value}
            </span>

        </div>

    )

}

/* SummaryRow component */
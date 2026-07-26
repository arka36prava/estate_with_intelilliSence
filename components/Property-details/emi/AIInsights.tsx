import {
  Sparkles,
  TrendingUp,
  Wallet,
  BadgeCheck,
} from "lucide-react";

export default function AIInsights({
  loanAmount,
  totalInterest,
  propertyPrice,
  downPayment,
}: any) {
  const interestPercent = (
    (totalInterest / loanAmount) *
    100
  ).toFixed(1);

  return (
    <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-orange-50 p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-indigo-600" />
        <h3 className="text-xl font-bold">
          AI Loan Insights
        </h3>
      </div>

      <div className="space-y-4">

        <div className="flex gap-3">
          <BadgeCheck className="text-green-600 mt-1" />
          <p>
            Down payment is{" "}
            <strong>
              {((downPayment / propertyPrice) * 100).toFixed(0)}%
            </strong>
            , reducing your borrowing cost.
          </p>
        </div>

        <div className="flex gap-3">
          <Wallet className="text-orange-600 mt-1" />
          <p>
            Total interest is{" "}
            <strong>{interestPercent}%</strong> of your
            principal amount.
          </p>
        </div>

        <div className="flex gap-3">
          <TrendingUp className="text-blue-600 mt-1" />
          <p>
            Increasing the down payment can reduce your EMI
            and total interest significantly.
          </p>
        </div>

      </div>
    </div>
  );
}
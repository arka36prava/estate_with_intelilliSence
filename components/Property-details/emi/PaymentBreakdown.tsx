function Row({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between py-3 border-b last:border-none">
      <span className="text-gray-500">{title}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

export default function PaymentBreakdown({
  propertyPrice,
  downPayment,
  loanAmount,
  interestRate,
  loanYears,
  monthlyEMI,
  totalInterest,
  totalPayment,
}: any) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">
        Payment Breakdown
      </h3>

      <Row
        title="Property Price"
        value={`₹${propertyPrice.toLocaleString("en-IN")}`}
      />

      <Row
        title="Down Payment"
        value={`₹${downPayment.toLocaleString("en-IN")}`}
      />

      <Row
        title="Loan Amount"
        value={`₹${loanAmount.toLocaleString("en-IN")}`}
      />

      <Row
        title="Interest Rate"
        value={`${interestRate}%`}
      />

      <Row
        title="Loan Tenure"
        value={`${loanYears} Years`}
      />

      <Row
        title="Monthly EMI"
        value={`₹${Math.round(monthlyEMI).toLocaleString("en-IN")}`}
      />

      <Row
        title="Total Interest"
        value={`₹${Math.round(totalInterest).toLocaleString("en-IN")}`}
      />

      <Row
        title="Total Payment"
        value={`₹${Math.round(totalPayment).toLocaleString("en-IN")}`}
      />
    </div>
  );
}
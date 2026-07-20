export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureYears: number
) {
  const monthlyRate = annualInterestRate / 12 / 100;
  const months = tenureYears * 12;

  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return {
    emi: Number(emi.toFixed(2)),
    totalPayment: Number((emi * months).toFixed(2)),
    totalInterest: Number((emi * months - principal).toFixed(2)),
  };
}
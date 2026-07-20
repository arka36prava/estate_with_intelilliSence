import { z } from "zod";

export const AffordabilityInputSchema = z.object({
  monthlyIncome: z.number().positive(),

  monthlyEMI: z.number().default(0),

  downPayment: z.number().default(0),

  annualInterestRate: z.number().default(8.5),

  loanTenureYears: z.number().default(20),
});

export type AffordabilityInput = z.infer<
  typeof AffordabilityInputSchema
>;

export function calculateAffordability(
  input: AffordabilityInput
) {
  const {
    monthlyIncome,
    monthlyEMI,
    downPayment,
    annualInterestRate,
    loanTenureYears,
  } = AffordabilityInputSchema.parse(input);

  // Maximum EMI = 40% of monthly income
  const recommendedEMI = monthlyIncome * 0.4;

  const availableEMI =
    Math.max(recommendedEMI - monthlyEMI, 0);

  const monthlyRate =
    annualInterestRate / 12 / 100;

  const months = loanTenureYears * 12;

  const maxLoan =
    availableEMI *
    ((Math.pow(1 + monthlyRate, months) - 1) /
      (monthlyRate *
        Math.pow(1 + monthlyRate, months)));

  const maxBudget = maxLoan + downPayment;

  const affordabilityScore = Math.min(
    100,
    Math.round((availableEMI / recommendedEMI) * 100)
  );

  return {
    recommendedEMI: Math.round(recommendedEMI),
    availableEMI: Math.round(availableEMI),
    maxLoan: Math.round(maxLoan),
    maxBudget: Math.round(maxBudget),
    affordabilityScore,
  };
}
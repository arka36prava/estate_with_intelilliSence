// ai/types/investment.ts

import { z } from "zod";

export const InvestmentInputSchema = z.object({
  city: z.string(),

  budget: z.number().nullable(),

  downPayment: z.number().nullable(),

  annualInterestRate: z.number().nullable(),

  loanTenureYears: z.number().nullable(),

  purpose: z.string().nullable(),

  monthlyIncome: z.number().nullable(),

  monthlyEMI: z.number().nullable(),
});

export const InvestmentResponseSchema = z.object({
  recommendation: z.string(),

  property: z.unknown(),

  emi: z.unknown(),

  roi: z.number(),
});

export type InvestmentInput = z.infer<typeof InvestmentInputSchema>;

export type InvestmentResponse = z.infer<typeof InvestmentResponseSchema>;
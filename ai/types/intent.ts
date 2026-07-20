import { z } from "zod";

export const IntentSchema = z.object({
  intent: z.enum([
    "GENERAL_CHAT",
    "PROPERTY_RECOMMENDATION",
    "INVESTMENT_ANALYSIS",
    "EMI_CALCULATION",
    "PROPERTY_COMPARISON",
    "MARKET_ANALYSIS",
  ]),

  city: z.string().nullable().optional(),

  budget: z.number().nullable().optional(),

  downPayment: z.number().nullable().optional(),

  annualInterestRate: z.number().nullable().optional(),

  loanTenureYears: z.number().nullable().optional(),

  monthlyIncome: z.number().nullable().optional(),

  monthlyEMI: z.number().nullable().optional(),

  purpose: z.string().nullable().optional(),
});

export type Intent = z.infer<typeof IntentSchema>;
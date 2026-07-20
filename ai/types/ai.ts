export interface InvestmentInput {
  city: string;
  budget: number;
  downPayment: number;
  annualInterestRate: number;
  loanTenureYears: number;
}

export interface InvestmentReport {
  recommendation: string;
  roi: number;
  emi: number;
  totalInterest: number;
  properties: unknown[];
}
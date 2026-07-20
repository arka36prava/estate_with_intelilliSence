export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  city: string;
  locality: string;
  address: string;

  bedrooms: number;
  bathrooms: number;
  area: number;

  parking: number;

  image?: string;

  expectedRental?: number;

  appreciation?: number;
}

export interface InvestmentMetrics {
  emi: number;
  totalInterest: number;
  totalPayment: number;

  roi: number;

  rentalYield: number;

  affordabilityScore: number;
}

export interface InvestmentReport {
  recommendation: string;

  property: Property;

  affordability: {
    affordabilityScore: number;
  };

  emi: {
    emi: number;
    totalInterest: number;
    totalPayment: number;
  };

  roi: number;

  rentalYield: {
    rentalYield: number;
  };
}

export interface ChatResponse {
  success: boolean;

  report: InvestmentReport;
}
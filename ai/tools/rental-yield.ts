import { z } from "zod";

export const RentalYieldInputSchema = z.object({
  propertyPrice: z.number().positive(),
  monthlyRent: z.number().positive(),
});

export type RentalYieldInput = z.infer<
  typeof RentalYieldInputSchema
>;

export function calculateRentalYield(
  input: RentalYieldInput
) {
  const { propertyPrice, monthlyRent } =
    RentalYieldInputSchema.parse(input);

  const annualRent = monthlyRent * 12;

  const rentalYield =
    (annualRent / propertyPrice) * 100;

  return {
    annualRent,
    rentalYield: Number(rentalYield.toFixed(2)),
  };
}
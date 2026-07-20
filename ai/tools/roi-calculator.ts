export function calculateROI(
  propertyPrice: number,
  annualRentalIncome: number,
  expectedSellingPrice: number
) {
  const profit =
    annualRentalIncome +
    (expectedSellingPrice - propertyPrice);

  const roi = (profit / propertyPrice) * 100;

  return Number(roi.toFixed(2));
}
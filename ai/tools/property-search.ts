import { prisma } from "@/lib/prisma";
import { mapPrismaProperty } from "@/lib/propertyMapper"; // adjust the path

export async function searchProperties(
  city?: string,
  budget?: number
) {
  const properties = await prisma.property.findMany({
    where: {
      ...(city && {
        city: {
          contains: city,
          mode: "insensitive",
        },
      }),
      ...(budget && {
        price: {
          lte: budget,
        },
      }),
    },
    include: {
      images: true,
      propertyScore: true,
      riskAnalysis: true,
    },
    take: 5,
  });

  return properties.map(mapPrismaProperty);
}
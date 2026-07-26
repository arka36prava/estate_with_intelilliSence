import { prisma } from "@/lib/prisma";
import { mapPrismaProperty } from "@/lib/propertyMapper";
import AnimatedPropertyGrid from "./AnimatedPropertyGrid";

export default async function PropertyGrid() {
  const properties = await prisma.property.findMany({
    include: {
      images: true,
      propertyScore: true,
      riskAnalysis: true,
    },
  });

  const uiProperties = properties.map(mapPrismaProperty);

  return <AnimatedPropertyGrid properties={uiProperties} />;
}
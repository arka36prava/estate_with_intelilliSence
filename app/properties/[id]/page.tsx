import PropertyHero from "@/components/Property-details/PropertyHero";
import AIInvestment from "@/components/Property-details/AIInvestment";
import SimilarProperties from "@/components/Property-details/SimilarProperties";
//import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { mapPrismaProperty } from "@/lib/propertyMapper";

interface PropertyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = await prisma.property.findUnique({
      where: {
        id,
      },
      include: {
        images: true,
        propertyScore: true,
        riskAnalysis: true,
      },
    });

    if (!property) {
    notFound();
    }
    const uiProperty = mapPrismaProperty(property);

    const serializedProperty = {
      ...property,
      price: Number(property.price),
      expectedRental: property.expectedRental
        ? Number(property.expectedRental)
        : null,
    };
    const similarProperties = await prisma.property.findMany({
      where: {
        city: property.city,
        id: {
          not: property.id,
        },
      },
      include: {
        images: true,
      },
      take: 4,
    });
    const uiSimilarProperties = similarProperties.map(mapPrismaProperty);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* <PropertyHero property={property} />
      <AIInvestment property={property} /> */}

      {/* <PropertyHero property={serializedProperty} />
      <AIInvestment property={serializedProperty} /> */}
      <PropertyHero property={uiProperty} />
      <AIInvestment property={uiProperty} />
      <SimilarProperties property={uiProperty} similarProperties={uiSimilarProperties}/>
    </main>
  );
}
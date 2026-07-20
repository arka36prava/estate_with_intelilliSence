import { prisma } from "@/lib/prisma";

export async function welcomeAgent() {
  const featuredProperties = await prisma.property.findMany({
    where: {
      city: {
        in: ["Kolkata", "Bangalore", "Hyderabad"],
      },
    },

    include: {
      images: true,
      propertyScore: true,
      riskAnalysis: true,
    },

    take: 6,
  });

  return {
    message:
      "👋 Welcome to your AI Real Estate Assistant!\n\n" +
      "I specialize in helping you discover properties and make smarter investment decisions.\n\n" +
      "You can ask me things like:\n\n" +
      "🏡 Suggest me a property in Kolkata\n" +
      "🏘 Villas in Bangalore under ₹1 Cr\n" +
      "💰 Analyze a ₹60 lakh investment\n" +
      "📈 Which property gives better ROI?\n\n" +
      "Meanwhile, here are some featured properties you may like.",

    properties: featuredProperties,
  };
}
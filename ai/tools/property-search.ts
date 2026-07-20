import { prisma } from "@/lib/prisma";

// export async function searchProperties(
//   city: string,
//   budget?: number
// ) {
//   return prisma.property.findMany({
//     where: {
//       city: {
//         contains: city,
//         mode: "insensitive",
//       },

//       ...(budget && {
//         price: {
//           lte: budget,
//         },
//       }),
//     },

//     include: {
//       images: true,
//       propertyScore: true,
//       riskAnalysis: true,
//     },

//     take: 5,
//   });
// }

export async function searchProperties(
  city?: string,
  budget?: number
) {
  return prisma.property.findMany({
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
}
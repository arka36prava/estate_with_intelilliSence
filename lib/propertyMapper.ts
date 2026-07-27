// lib/propertyMapper.ts

export function mapPrismaProperty(property: any) {
  console.log("Images from DB:", property.images);
  return {
  id: property.id,
  title: property.title,
  description: property.description,

  city: property.city,
  locality: property.locality,
  address: property.address,

  price: Number(property.price),
  expectedRental: Number(property.expectedRental ?? 0),
  appreciation: property.appreciation,

  bedrooms: property.bedrooms,
  bathrooms: property.bathrooms,
  area: property.area,
  parking: property.parking,

  // 👇 Add these
  furnishing: property.furnishing,
  propertyType: property.propertyType,
  listingType: property.listingType,
  yearBuilt: property.yearBuilt,
  latitude: property.latitude,
  longitude: property.longitude,

   aiScore: property.propertyScore?.overallScore ?? 94,
   roi: property.appreciation ?? 0,

  image:
  property.images && property.images.length > 0
    ? property.images[0].imageUrl
    : "/images/placeholder.jpg",
  images:property.images?.map((img: { imageUrl: string }) => img.imageUrl) ?? [],


  score: property.propertyScore,
  risk: property.riskAnalysis,
};
}
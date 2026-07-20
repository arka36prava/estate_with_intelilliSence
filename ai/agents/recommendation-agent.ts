import { searchProperties } from "../tools/property-search";

interface RecommendationInput {
  city?: string | null;
  budget?: number | null;
}

export async function recommendationAgent(
  input: RecommendationInput
) {
  const properties = await searchProperties(
    input.city ?? undefined,
    input.budget ?? undefined
  );

  if (!properties.length) {
    return {
      recommendation: `Sorry, I couldn't find any properties in ${input.city}.`,
      properties: [],
    };
  }

  return {
    recommendation: `I found ${properties.length} matching properties in ${input.city}.`,
    properties,
  };
}
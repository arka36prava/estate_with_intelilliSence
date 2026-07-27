"use client";

import Image from "next/image";
import { BedDouble, Bath, MapPin, IndianRupee, Maximize } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    city: string;
    locality: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    expectedRental?: number;
    appreciation?: number;
    image?: string;
  };
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  console.log(property);
console.log("Image:", property.image);
  return (
    <Card className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all">

      <div className="relative h-56 w-full">

       <Image
          src={property.image || "/images/placeholder.jpg"}
          alt={property.title}
          fill
          className="object-cover"
        />

      </div>

      <CardContent className="space-y-4 p-5">

        <div>

          <h2 className="text-xl font-bold">

            {property.title}

          </h2>

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">

            <MapPin size={16} />

            <span>

              {property.locality}, {property.city}

            </span>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <IndianRupee size={18} />

          <span className="text-2xl font-bold">

            ₹ {property.price.toLocaleString("en-IN")}

          </span>

        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="flex items-center gap-2">

            <BedDouble size={18} />

            {property.bedrooms} Bed

          </div>

          <div className="flex items-center gap-2">

            <Bath size={18} />

            {property.bathrooms} Bath

          </div>

          <div className="flex items-center gap-2">

            <Maximize size={18} />

            {property.area} sqft

          </div>

        </div>

        <div className="flex flex-wrap gap-2">

          {property.expectedRental && (
            <Badge variant="secondary">
              Rent ₹{property.expectedRental.toLocaleString("en-IN")}
            </Badge>
          )}

          {property.appreciation && (
            <Badge>

              {property.appreciation}% Appreciation

            </Badge>
          )}

        </div>

        <Link href={`/properties/${property.id}`}>
          <Button className="w-full">
            View Details
          </Button>
        </Link>

      </CardContent>

    </Card>
  );
}
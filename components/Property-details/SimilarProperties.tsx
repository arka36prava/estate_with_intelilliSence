import { properties } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";

interface SimilarPropertiesProps {
  property: any;
  similarProperties: any[];
}

export default function SimilarProperties({
  property,
  similarProperties,
}: SimilarPropertiesProps) {
  // const similarProperties = properties
  //   .filter((item) => item.id !== property.id)
  //   .filter((item) => item.city === property.city)
  //   //.filter((item) => item.propertyType === property.propertyType)
  //   .filter((item) => {
  //     const minPrice = property.price * 0.8;
  //     const maxPrice = property.price * 1.2;

  //     return item.price >= minPrice && item.price <= maxPrice;
  //   });

  return (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl text-blue-700 font-bold mb-8">
      You may Like the Similar Properties 
    </h2>

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {similarProperties.map((item) => (
        <Link
          key={item.id}
          href={`/properties/${item.id}`}
          className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={300}
            className="h-56 w-full object-cover"
          />

          <div className="p-5">
            <h3 className="font-bold text-lg line-clamp-2">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {item.locality}, {item.city}
            </p>

            <p className="text-orange-600 font-bold text-2xl mt-4">
              ₹{item.price.toLocaleString("en-IN")}
            </p>

            <button className="mt-5 w-full rounded-xl bg-orange-500 text-white py-3 hover:bg-orange-600">
              View Property
            </button>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
}

  
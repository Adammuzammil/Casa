import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/legacy/image";
import { Bed, Heart } from "lucide-react";

interface Property {
  id: number;
  name: string;
  address: string;
  price: string;
  image: string;
  specs: {
    name: string;
    value: string | number;
  }[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="rounded-xl overflow-hidden shadow-md w-full max-w-sm">
      {property.image ? (
        <div className="relative w-full h-56">
          <Image
            src={property.image}
            alt={property.name}
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-60"
          />
        </div>
      ) : (
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image</span>
        </div>
      )}
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg font-semibold text-black">
              ${property.price}
              <span className="text-muted-foreground text-sm">/month</span>
            </p>
            <p className="font-medium text-base">{property.name}</p>
            <p className="text-sm text-muted-foreground">{property.address}</p>
          </div>
          <Heart className="h-5 w-5 text-muted-foreground mt-1" />
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
          {property.specs?.map((spec, index) => (
            <div key={index} className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{spec.value} Beds</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

const ProductImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div className="relative w-full h-96">
        <Image
          src={images[currentImageIndex].url}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex gap-6 mt-12">
        {images.map((img, index) => (
          <div
            className="relative w-full h-28"
            key={img.id}
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              className="object-cover rounded-md"
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImages;

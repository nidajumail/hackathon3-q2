"use client"
import Image from "next/image";
import { useState } from "react";

const product = {
  name: "Playwood Arm Chair",
  price: "$250",
  category: "Furniture",
  rating: 4.5,
  images: [
    "/images/product-1.png",
    "/images/product-2.png",
    "/images/product-3.png",
    "/images/product-4.png",
    
  ],
};


const relatedProducts = [
  { id: 1, name: "Mens Fashion", image: "/images/men-fashion.png", price: "$45" },
  { id: 2, name: "Women Fashion", image: "/images/women-fashion.png", price: "$55" },
  { id: 3, name: "Mr. Bunny Fashion", image: "/images/bunny-fashion.png", price: "$35" },
  { id: 4, name: "Top Red Royal Chair", image: "/chair12.png", price: "$250" },
];

export default function Blog() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 py-4">
        Home / Shop / <span className="text-gray-900">Product Details</span>
      </nav>

      {/* Product Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row">
        {/* Product Images */}
        <div className="md:w-1/3 flex flex-col">
          <Image
            src={selectedImage}
            alt="Product Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div className="flex space-x-2 mt-4">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Thumbnail"
                width={60}
                height={60}
                className={`cursor-pointer border ${selectedImage === img ? "border-blue-500" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.category}</p>
          <p className="text-xl font-bold mt-2 text-gray-900">{product.price}</p>

          {/* Add to Cart */}
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>

          {/* Rating */}
          <div className="mt-4 flex items-center">
            <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
            <span className="text-gray-600 ml-2">{product.rating} stars</span>
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <div className="flex space-x-6 border-b pb-2">
              <button className="text-blue-600 font-semibold">Description</button>
              <button className="text-gray-500">Additional Info</button>
              <button className="text-gray-500">Reviews</button>
              <button className="text-gray-500">Video</button>
            </div>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded-lg">
              <Image src={product.image} alt={product.name} width={150} height={150} />
              <h4 className="text-lg mt-2">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      </div>)}
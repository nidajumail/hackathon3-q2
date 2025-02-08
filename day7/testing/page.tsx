
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react';


const Page = async () => {
 
  const query = await client.fetch(`*[_type == "product"] | order(_createdAt desc) [0...8] {
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`);
 

  return (
    <main><h1 className="flex justify-center font-bold text-4xl p-6 ">Featured Product</h1>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {query.map((item:any) => (
        <div
          key={item._id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 hover:shadow-2xl transition-shadow"
        >
          {item.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              Price: ${item.price}
            </p>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            <p className="text-sm text-red-500 font-medium mt-2">
              Discount: {item.discountPercentage}%
            </p>
            <p className="text-sm text-green-600 font-medium">
              Stock Level: {item.stockLevel}
            </p>
            <p className="text-sm text-gray-500 mt-1">Category: {item.category}</p>
          </div>
        </div>
      ))}
    </div>

    </main>
  );
};

export default Page;
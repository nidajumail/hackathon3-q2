import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pages = () => {


    
  const filters = {
    brands: [
      "Coaster Furniture",
      "Fusion Dot High Fashion",
      "Unique Furniture Restor",
      "Dream Furniture Flipping",
      "Young Repurposed",
      "Green DIY Furniture",
    ],
    discounts: ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"],
    ratings: [5, 4, 3],
    categories: [
      "Prestashop",
      "Magento",
      "Bigcommerce",
      "eCommerce",
      "3dcart",
      "Bags",
      "Accessories",
      "Shoes",
    ],
  };

  const products = [
    {
      id: 1,
      name: "Dictum morbi",
      price: "$56.00",
      oldPrice: "$64.00",
      image: "/images/product-1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      name: "Sodales sit",
      price: "$86.00",
      oldPrice: "$92.00",
      image: "/images/product-2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      name: "Nibh varius",
      price: "$96.00",
      oldPrice: "$105.00",
      image: "/images/product-3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      name: "Mauris quis",
      price: "$50.00",
      oldPrice: "$62.00",
      image: "/images/product-4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-700 mb-2">
          Ecommerce Accesories & Fashion item
        </h1>
        <p className="text-sm text-gray-500">
          About 9,620 results (0.62 seconds)
        </p>

        {/* Filters & Products */}
        <div className="flex mt-6">
          {/* Filters */}
          <aside className="w-1/4 pr-4">
            {/* Product Brand */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Product Brand
              </h3>
              <ul>
                {filters.brands.map((brand, index) => (
                  <li key={index} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <span className="text-gray-600">{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discount Offer */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Discount Offer
              </h3>
              <ul>
                {filters.discounts.map((discount, index) => (
                  <li key={index} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <span className="text-gray-600">{discount}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rating */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Rating Item
              </h3>
              <ul>
                {filters.ratings.map((rating, index) => (
                  <li key={index} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <div className="flex items-center">
                        {Array.from({ length: rating }).map((_, i) => (
                          <span key={i} className="text-yellow-500">&#9733;</span>
                        ))}
                        <span className="ml-2 text-gray-500">({rating * 100})</span>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Categories
              </h3>
              <ul>
                {filters.categories.map((category, index) => (
                  <li key={index} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <span className="text-gray-600">{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Listing */}
          <main className="w-3/4">
            <div className="grid grid-cols-1 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start"
                >
                    <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-500 rounded-md "
                  /></Link>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-700">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="mt-2">
                      <span className="text-indigo-600 font-bold">
                        {product.price}
                      </span>{" "}
                      <span className="line-through text-gray-500">
                        {product.oldPrice}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center space-x-4">
                      <button className="text-gray-500 hover:text-indigo-600">
                        &#9825;
                      </button>
                      <button className="text-gray-500 hover:text-indigo-600">
                        &#128722;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Pages;

"use client";
import Image from "next/image";
import { useState } from "react";

const cartItems = [
  { id: 1, name: "Ur diam consequat", price: 32, image: "/images/product-1.png", total: 219 },
  { id: 2, name: "Vel faucibus posuere", price: 32, image: "/images/product-2.png", total: 219 },
  { id: 3, name: "Ac vitae vestibulum", price: 32, image: "/images/product-3.png", total: 219 },
  { id: 4, name: "Elit massa diam", price: 32, image: "/images/product-4.png", total: 219 },
  { id: 5, name: "Prain pharetra elementum", price: 32, image: "/images/product-5.png", total: 219 },
];

export default function Cart() {
  const [cart] = useState(cartItems);

  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-900">Shopping Cart</h1>
      <nav className="text-gray-500 text-sm mt-2">
        Home &gt; Pages &gt; <span className="text-pink-500">Shopping Cart</span>
      </nav>

      {/* Cart Table */}
      <div className="mt-6">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 flex items-center space-x-4">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">Color: Brown | Size: XL</p>
                  </div>
                </td>
                <td className="p-4">${item.price}.00</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-12 border rounded px-2 py-1"
                  />
                </td>
                <td className="p-4 text-gray-800">£{item.total}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Actions */}
      <div className="flex justify-between mt-6">
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Update Cart</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Clear Cart</button>
      </div>

      {/* Cart Totals */}
      <div className="mt-8 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between text-gray-700">
            <p>Subtotal:</p>
            <p>£219.00</p>
          </div>
          <div className="flex justify-between text-gray-700 mt-2">
            <p>Total:</p>
            <p className="font-bold">£325.00</p>
          </div>
          <p className="text-xs text-green-500 mt-2">✓ Shipping & taxes calculated at checkout</p>
          <button className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Proceed To Checkout
          </button>
        </div>

        {/* Calculate Shipping */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:mt-0">
          <h2 className="text-lg font-semibold mb-4">Calculate Shipping</h2>
          <input type="text" placeholder="Bangladesh" className="w-full p-2 border rounded mb-2" />
          <input type="text" placeholder="Mirpur Dhaka - 1200" className="w-full p-2 border rounded mb-2" />
          <input type="text" placeholder="Postal Code" className="w-full p-2 border rounded mb-2" />
          <button className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Calculate Shipping
          </button>
        </div>
      </div>
    </div>
  );
}

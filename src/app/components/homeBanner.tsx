"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/sofa1.png",
    lampImage: "/lamp.png",
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/sofa2.png",
    lampImage: "/lamp.png",
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/sofa3.png",
    lampImage: "/lamp.png",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <section className="relative bg-gray-100 py-10 md:pb-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-center relative">
        <Image
          src={current.lampImage}
          alt="Lamp"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Center Column: Content */}
      <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          {current.title}
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {current.description}
        </p>
        <Link
          href="#"
          className="bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300"
        >
          {current.buttonText}
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/4 flex justify-center items-center">
        <Image
          src={current.chairImage}
          alt="Chair"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 flex space-x-5">
        <button
          onClick={handlePrevSlide}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-all"
        >
          Previous
        </button>
        <button
          onClick={handleNextSlide}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-all"
        >
          Next
        </button>
      </div>
    </section>
  );
}

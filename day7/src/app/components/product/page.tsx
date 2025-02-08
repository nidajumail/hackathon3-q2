
"use client"

import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { allProduct } from "@/sanity/lib/queries"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

import { addToCart } from "../../actions/actions"
import Swal from "sweetalert2"
import { Product } from "../../../../types/products"


const Productt = () => {
   
    
      const [product,setProduct]= useState<Product[]>([])
    useEffect(() => {
      async function fetchProduct() {
        try {
          const fetchedProduct: Product[] = await client.fetch(allProduct);
          // console.log("Fetched Products:", fetchedProduct); // Debugging
          setProduct(fetchedProduct);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
      fetchProduct();
    }, []);

    const handleAddToCart =(e:React.MouseEvent, product:Product)=>{
      e.preventDefault()
      Swal.fire({
        position:"top-right",
        icon:"success",
        title:`${product.name} added to cart`,
        showCloseButton:false,
        timer:1000
      })
      addToCart(product)
    
      
    }
    return(
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="flex justify-center font-bold text-2xl">Latest Product</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.map((product)=>(
        <div key={product._id} className="border rounded-lg shadow-md p-4 hover:sgadow-lg duration transition-duration-200">
        
          
           <Link href={`/product/${product.slug?.current}`}>
                {product.image && (
                    <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-44 object-cover rounded-md " />
                )}


                <h2>{product.name}</h2>
                <p>{product.price? `$${product.price}` : "price not available"}</p>

                <button className="bg-gradient-to-r from-blue-500 to-purple-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duratio-300 ease-in-out" onClick={(e)=> handleAddToCart(e, product)}>Add To Cart</button>
                </Link> 
                
                </div>
           ))
        }
          </div> 
        
          </div>

    );
  }
  export default Productt;

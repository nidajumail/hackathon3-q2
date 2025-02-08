
import { client } from "@/sanity/lib/client"

import { groq } from "next-sanity"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { Product } from "../../../../types/products"
import AddToCartButton from "@/app/AddToCart"

interface productPageProps{
    params :Promise<{slug:string}>
}
async function getProduct(slug:string): Promise<Product>{
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        _type, 
        image,
        description,
        "slug": slug.current,
        price,
        }`,
        {slug}
    )
}
export default async function ProductPage({params}:productPageProps){
  const{slug} =await  params
  const product =await getProduct(slug)
return(
    <div className="max-w-7xl mx-auto px-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square">
                {product.image && (
                    <Image
                    src={urlFor(product.image).url()}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md"/>
                    
                )}
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-4xl font-bold">{product.name}</div>
            <h2 className="text-2xl font-sans">{product.price}</h2>
            <p className="text-lg">{product.description} </p>
            <AddToCartButton product={product}/>
            </div>
        </div>
    </div>
)}

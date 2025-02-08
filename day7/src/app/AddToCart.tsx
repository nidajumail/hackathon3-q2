'use client'

import { useState } from 'react'
// import { Button } from '@/components/ui/button'
import { addToCart } from '@/app/actions/actions'
// import toast from 'react-hot-toast'
// import { Product } from '@/types/product'
import Swal from 'sweetalert2';
import { Product } from '../../types/products';

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    await addToCart(product)
    setIsAdding(false)
     Swal.fire({
            position:"top-right",
            icon:"success",
            title:`${product.name} added to cart`,
            showCloseButton:false,
            timer:1000
          })
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="w-full bg-blue-500 text-white hover:bg-blue-600 text-xl py-6 flex items-center justify-center gap-3"
    >
      
      {isAdding ? 'Adding to Order...' : 'Add to Order'}
    </button>
  )
}


"use client"

import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { CgChevronRight } from 'react-icons/cg'
import { client } from '@/sanity/lib/client'
import Swal from 'sweetalert2'

const CheckOut = () => {
    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })
    const [formError, setFormError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })

    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subTotal = cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0)
    const totalPrice = subTotal - discount;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };
        setFormError(errors);
        return Object.values(errors).every((error) => !error)
    }


    const handlePlaceOrder = async () => {
        // if (!validateForm()) {
        //     Swal.fire("Error!", "Please fill in all fields before proceeding.", "error");
        //     return;
        // }

Swal.fire({
            title: 'Processing your order...',
            text: 'Please wait a moment',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, proceed',
        }).then(async (result) => {
            if (result.isConfirmed) {
              if(validateForm()){
                localStorage.removeItem("appliedDiscount")
                Swal.fire("Success!", "Your order has been placed.", "success");
              } else{
                Swal.fire("Error!", "Something went wrong while placing the order.", "error");
              }
        
                const orderData = {
                    _type: "order",
                    firstName: formValues.firstName,
                    lastName: formValues.lastName,
                    city: formValues.city,
                    address: formValues.address,
                    zipCode: formValues.zipCode,
                    phone: formValues.phone,
                    email: formValues.email,
                    cartItems: cartItems.map(item => ({
                        _type: "reference",
                       _ref: item._id
                    })),
                    subtotal: subTotal,
                    discount: discount,
                    total: totalPrice,
                    orderDate: new Date().toISOString()
                };

                try {
                    await client.create(orderData)
                    localStorage.removeItem("appliedDiscount")
                 
                } catch (error) {
                    console.error("Error creating order", error)
                    
                }
            }
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            {/* Navigation */}
            <div className="max-w-6xl mx-auto px-6">
                <nav className="flex items-center text-gray-600 text-sm">
                    <Link href="/cart" className="hover:text-black">Cart</Link>
                    <CgChevronRight className="mx-2" />
                    <span className="font-semibold text-black">Checkout</span>
                </nav>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold border-b pb-3 mb-4">Order Summary</h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex items-center gap-4 py-4 border-b">
                                <div className="w-16 h-16 rounded overflow-hidden">
                                    {item.image && (
                                        <Image
                                            src={urlFor(item.image).url()}
                                            alt="Product Image"
                                            width={64}
                                            height={64}
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                    <p className="text-xs text-gray-500">Quantity: {item.stockLevel}</p>
                                </div>
                                <p className="font-medium">${item.price * item.stockLevel}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No Items In Cart</p>
                    )}
                    <div className="text-right pt-4">
                        <p className="text-sm">Subtotal: <span className="font-medium">${subTotal}</span></p>
                        <p className="text-sm">Discount: <span className="text-green-500">${discount}</span></p>
                        <p className="text-lg font-semibold mt-2">Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span></p>
                    </div>
                </div>

                {/* Billing Information */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.keys(formValues).map((key) => (
                            <div key={key}>
                                <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
                                <input
                                    type="text"
                                    id={key}
                                    placeholder={`Enter your ${key}`}
                                    value={(formValues as { [key: string]: string })[key]}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    onChange={handleInputChange}
                                />
                                {formError[key as keyof typeof formError] && (
                                    <p className="text-xs text-red-500 mt-1">{key.replace(/([A-Z])/g, ' $1')} is required</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={handlePlaceOrder} 
                        className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;

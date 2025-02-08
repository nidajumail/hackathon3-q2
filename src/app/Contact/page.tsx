"use client"

import Image from "next/image";
import Link from "next/link"
interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}


import React from 'react';
function ContactInfoCard({ icon, title, description, color }: ContactInfoProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: string;
}
// Placeholder for Input
function Input({ placeholder, type = 'text', className, ...props }: InputProps) {
  return <input type={type} placeholder={placeholder} className={`p-2 w-full ${className}`} {...props} />;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}
// Placeholder for Textarea
function Textarea({ placeholder, className, ...props }: TextareaProps) {
  return <textarea placeholder={placeholder} className={`p-2 w-full ${className}`} {...props}></textarea>;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// Placeholder for Button
function Button({ children, className, ...props }: ButtonProps) {
  return <button className={`py-2 px-4 ${className}`} {...props}>{children}</button>;
}

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {}
// Placeholder for icons
function Phone(props: IconProps) {
  return <span {...props}>📞</span>;
}
function Mail(props: IconProps) {
  return <span {...props}>📧</span>;
}
function MapPin(props: IconProps) {
  return <span {...props}>📍</span>;
}
function Truck(props: IconProps) {
  return <span {...props}>🚚</span>;
}

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      {/* Page Header */}
      <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h1 className="text-3xl text-center md:text-left font-bold mb-4">Contact Us</h1>
          <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container md:w-[1170px] mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#151875] mb-4">Information About us</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada
                diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
                quis bibendum quam.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="h-8 w-8 rounded-full bg-[#7E33E0] flex items-center justify-center text-white">
                  f
                </Link>
                <Link href="#" className="h-8 w-8 rounded-full bg-[#FB2E86] flex items-center justify-center text-white">
                  t
                </Link>
                <Link href="#" className="h-8 w-8 rounded-full bg-[#5625DF] flex items-center justify-center text-white">
                  in
                </Link>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#151875] mb-6">Contact Way</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <ContactInfoCard
                  icon={<Phone className="h-5 w-5" />}
                  title="Tel: 877-67-88-99"
                  description="E-Mail: shop@store.com"
                  color="#7E33E0"
                />
                <ContactInfoCard
                  icon={<Mail className="h-5 w-5" />}
                  title="Support Forum"
                  description="For over 24hr"
                  color="#FB2E86"
                />
                <ContactInfoCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="20 Margaret st, London"
                  description="Great Britain, 3NM98-LK"
                  color="#FFB265"
                />
                <ContactInfoCard
                  icon={<Truck className="h-5 w-5" />}
                  title="Free standard shipping"
                  description="on all orders."
                  color="#1BE982"
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-2xl font-bold text-[#151875] mb-6">Get In Touch</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat
                vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6 md:pl-2 w-full">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name*" required className="border rounded-[4px] border-gray-500" />
                  <Input type="email" placeholder="Your E-mail*" required className="border rounded-[4px] border-gray-500" />
                </div>
                <Input placeholder="Subject" required className="border rounded-[4px] border-gray-500" />
                <Textarea
                  placeholder="Type Your Message"
                  required
                  className="min-h-[150px] border rounded-[4px] border-gray-500"
                />
                <Button
                  type="submit"
                  className="bg-[#FB2E86] rounded-[4px] px-10 text-white hover:bg-[#FB2E86]/90"
                >
                  Send Mail
                </Button>
              </form>
            </div>
          </div>

          <div className="relative">
            <Image src="/Contact illustration.png" alt="Contact illustration" width={500} height={500}className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

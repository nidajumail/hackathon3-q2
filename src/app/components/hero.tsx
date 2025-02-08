
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DiscountSection from '@/app/components/Discount'

import CustomDiv from '@/app/components/Custom'


import Blog from './Blog'
const Hero = () => {
 



    return (
        <div>
            <div className='mb-5'>
               
            </div>
            <div className='text-[#1A0B5B] text-[42px] font-semibold flex justify-center mb-5'>Featured Products</div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ml-20'>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/chair1.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105 ' >
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/chair2.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/chair3.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/chair4.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p></div>

            </div>
            <div className='text-[#1A0B5B] text-[42px] font-semibold flex justify-center mb-5 mt-5 '>Latest Products </div>
            <div>
                <ul className='flex justify-center items-center gap-3'>
                    <Link href={'/'}><li className='text-[16px] hover:text-pink-600 hover:underline font-normal'> New Arrival</li></Link>
                    <Link href={'/'}><li className='text-[16px] hover:text-pink-600 hover:underline font-sans'> Best Seller</li></Link>
                    <Link href={'/'}><li className='text-[16px] hover:text-pink-600 hover:underline font-sans'> Feature</li></Link>
                    <Link href={'/'}><li className='text-[16px] hover:text-pink-600 hover:underline font-sans'> Special Offer</li></Link>
                </ul>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 ml-24 ' >
                <div className='w-[360px] h-[306px] bg-slate-200 '>
                    <div className='flex justify-center items-center mt-9'><Image src={'/chair12.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-slate-200'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/chair13.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-slate-200'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/chair1.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-slate-200'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/image15.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-slate-200'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/image16.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-slate-200'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/chair4.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='text-[#1A0B5B] text-[42px] font-serif flex justify-center mb-5 mt-5'>What Shopex Offers</div>
            <div className='grid grid-cols-2 md:grid-cols-4 ml-24'>
                <div className='w-[270px] h-[320px] bg-slate-200'>
                 <div className='flex justify-center mt-12 mb-5 '>
                    <Image src={'/truck.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold text-slate-400 text-wrap'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                    
                </div>
                <div className='w-[270px] h-[320px] bg-slate-200'>
                <div className='flex justify-center mt-12 mb-5 '>
                    <Image src={'/coin.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold text-slate-400 text-wrap'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                </div>
                <div className='w-[270px] h-[320px] bg-slate-200'>
                <div className='flex justify-center mt-12 mb-5 '>
                    <Image src={'/badge.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold text-slate-400 text-wrap'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                </div>
                <div className='w-[270px] h-[320px] bg-slate-200'>
                <div className='flex justify-center mt-12 mb-5 '>
                    <Image src={'/dial.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold text-slate-400 text-wrap'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                </div>
                       
       
            </div>
            <div className='text-[#1A0B5B] text-[42px] font-semibold flex justify-center mb-5'>Trending Products</div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ml-20'>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/white1.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105 ' >
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/red1.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/white2.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-slate-200 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/red2.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p></div>

        </div>
     
        <div className="m-9 py-10">
      {/* Main Grid Layout with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* First Column */}
        <div className="relative bg-[#FFF6FB] p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat  bg-right w-8 h-8"
            style={{ backgroundImage: "url('/watch.png')",
                
             }}
          >
            {/* Image as background */}
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 hover:underline">Shop Now</Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative bg-[#EEEFFB] p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom w- h-full"
            style={{ backgroundImage: "url('/x2.png')" }}
          >
            {/* Image as background */}
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 hover:underline">View Collection</Link>
          </div>
        </div>

        {/* Third Column (Contains 3 rows with 2 columns each) */}
        <div className="grid grid-rows-3 gap-6 h-[250px]">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/chairs2.png" // Example image source
                alt="Image 3"
                layout="fill"
                objectFit="contain" // Changed to contain to avoid cutting the image
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/chairs3.png" // Example image source
                alt="Image 4"
                layout="fill"
                objectFit="contain" // Changed to contain to avoid cutting the image
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/chairs5.png" // Example image source
                alt="Image 5"
                layout="fill"
                objectFit="contain" // Changed to contain to avoid cutting the image
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="text-center">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-900">Discount Item</h1>
      
      {/* Links Row */}
      <div className="flex justify-center space-x-4 text-gray-600 text-sm mt-2">
        <a href="#" className="text-pink-500 font-medium hover:underline">
          Wood Chair
        </a>
        <span className="text-gray-400">•</span>
        <a href="#" className="hover:underline">Plastic Chair</a>
        <span className="text-gray-400">•</span>
        <a href="#" className="hover:underline">Sofa Collection</a>
        </div>

    <DiscountSection/>
  
 
    <CustomDiv/>
    
    <div className='text-[#1A0B5B] text-[42px] font-semibold flex justify-center mb-5 mt-5 '>Latest Blog</div>
    <Blog/>
    </div>
        </div>
    )
}

export default Hero
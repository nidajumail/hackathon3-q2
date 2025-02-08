/** @type {import('next').NextConfig} */
//  import type { NextConfig } from "next";

// const NextConfig :NextConfig = {
//   /*config options here */
//   eslint: {
//     ignoreDuringBuilds:true,
//   }
// };
// export default NextConfig;



// // line 9

// const NextConfig: NextConfig = {
//   /* config options here */
//   images:{domains:['cdn.sanity.io'],
//   }
// };

// export default NextConfig;

//  /** @type {import('next').NextConfig} */

//   const nextConfig: import('next').NextConfig = {
    
//     images:{
//     domains:['cdn.sanity.io'],  
//     },
//   };
const nextConfig={
  images:{
    domains:["cdn.sanity.io"]
  }
}
module.exports = nextConfig

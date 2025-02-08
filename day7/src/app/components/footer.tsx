export default function Footer() {
    return (
      <footer className="w-[1920]  h-[479] bg-gray-100 flex items-center justify-between px-16 py-8">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-indigo-900">HECKTO</h1>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="border border-gray-300 rounded-md px-4 py-2 w-60 focus:outline-pink-500"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
              Sign Up
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-600">Contact Info</p>
            <p className="text-sm text-gray-500">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>
        <div className="flex justify-evenly gap-14">
       <div>
        <h3 className="mb-6 font-semibold text-lg">Catagories</h3>
        <ul className="text-gray-500 font-semibold">
        <li>Laptops & Computers</li>
        <li>Smart Phones & Tablets</li>
        <li>Video Games & Consoles</li>
        <li>Waterproof Headphones</li>
        </ul>
       </div>
      
       <div>
        <h3 className="mb-6 font-semibold text-lg">Customer Care</h3>
        <ul className="text-gray-500 font-semibold" >
        <li>My Account</li>
        <li>Discount</li>
        <li>Returns</li>
        <li>Orders History</li>
        <li>Order Tracking</li>
        </ul></div>
        <div>
        <h3 className="mb-6 font-semibold text-lg">Pages</h3>
        <ul className="text-gray-500 font-semibold">
        <li>Blog</li>
        <li>Browse the Shop</li>
        <li>Category</li>
        <li>Pre-Built Pages</li>
        <li>Visual Composer Elements</li>
        <li>WooCommerce Pages</li>
        </ul>
        </div>
        
       </div>
          
  
          
       
      </footer>
    );
  }
  
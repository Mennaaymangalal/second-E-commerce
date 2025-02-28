import React from "react";


export default function Footer() {
  return (
  <div className="border-t-2">
      <footer  className="bg-gray-100 py-12 dark:bg-black dark:text-white" >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold">Logo</h2>
            <p className="text-gray-600 mt-2  dark:text-white">
              The advantage of hiring a workspace with us is that it gives you 
              comfortable service and all-around facilities.
            </p>
            <p className="text-gray-500 mt-4  dark:text-white ">© 2021</p>
          </div>

          {/* Services Section */}
          <div>
            <ul className="mt-2 space-y-2 text-gray-600  dark:text-white">
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
            </ul>
          </div>

          {/* Furniture Section */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500  dark:text-white">Furniture</h3>
            <ul className="mt-2 space-y-2 text-gray-600  dark:text-white">
              <li>Beds</li>
              <li>Chairs</li>
              <li>All</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500  dark:text-white">Follow Us</h3>
            <div className="mt-3 flex space-y-4 flex-col justify-between align-middle">
              <a href="#" className="text-gray-600 hover:text-orange-500  dark:text-white">
              <i class="fa-brands fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500  dark:text-white">
              <i class="fa-brands fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500  dark:text-white">
              <i class="fa-brands fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 border-t border-gray-300 pt-4 flex justify-between text-gray-600 text-sm">
        <div className=" dark:text-white">
         <p>Copyright © 2025</p>
        </div>
        <div className="space-x-4  dark:text-white">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

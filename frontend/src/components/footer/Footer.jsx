import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import Logo from "@/components/header/Logo.jsx";

const Footer = () => {
  return (
    // <footer className="dark:bg-dark-primary bg-dark-secondary">
    //   <div className="py-6 px-5 text-center">
    //     <p className="text-light">
    //       &copy;
    //       <span> {new Date().getFullYear()} </span>
    //       <span className="text-primary font-medium">ProCtrl</span>. All rights
    //       reserved.
    //     </p>
    //   </div>
    // </footer>
    <footer className="bg-[#121214] text-white pt-16 pb-10 px-4 md:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
    {/* Contact Us */}
    <div>
      <h4 className="text-lg font-semibold font-orbitron mb-4">Contact Us</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>2357 Gordon Street, CA</li>
        <li>+ (909) – 478-2742</li>
        <li>proctrl@gaminggears.com</li>
        <li>@ProCtrl</li>
      </ul>
    </div>

    {/* Let Us Help */}
    <div>
      <h4 className="text-lg font-orbitron font-semibold mb-4">Let Us Help</h4>
      <ul className="space-y-2 text-sm text-gray-300 cursor-pointer">
        <li className="hover:text-primary">Track My Order</li>
        <li className="hover:text-primary">Cancel My Order</li>
        <li className="hover:text-primary">Return My Order</li>
        <li className="hover:text-primary">Search</li>
      </ul>
    </div>

    {/* Our Policies */}
    <div>
      <h4 className="text-lg font-orbitron font-semibold mb-4">Our Policies</h4>
      <ul className="space-y-2 text-sm text-gray-300 cursor-pointer">
        <li className="hover:text-primary">Shipping & Delivery</li>
        <li className="hover:text-primary">Returns & Cancellations</li>
        <li className="hover:text-primary">Terms & Conditions</li>
        <li className="hover:text-primary">Privacy Policy</li>
      </ul>
    </div>

    {/* My Account */}
    <div>
      <h4 className="text-lg font-semibold font-orbitron mb-4">My Account</h4>
      <ul className="space-y-2 text-sm text-gray-300 cursor-pointer">
        <li className="hover:text-primary">Help and advice</li>
        <li className="hover:text-primary">Shipping & Returns</li>
        <li className="hover:text-primary">Terms and conditions</li>
        <li className="hover:text-primary">Refund Policy</li>
      </ul>
    </div>

    {/* Newsletter & Payments */}
    <div>
      <h4 className="text-lg font-orbitron font-semibold mb-4">Newsletters</h4>
      <div className="bg-[#1E1E1E] flex items-center rounded-full px-3 py-2 mb-6">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="flex-grow bg-transparent text-sm px-2 py-1 text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-4 py-1 text-sm font-semibold">
          Submit
        </button>
      </div>

      <h4 className="text-lg font-semibold font-orbitron mb-3">Payments</h4>
      <div className="flex gap-2">
        <img src="/visa.svg" alt="Visa" className="w-10" />
        <img src="/paypal.svg" alt="PayPal" className="w-10" />
        <img src="/rupay.svg" alt="RuPay" className="w-10" />
        <img src="/amex.svg" alt="Amex" className="w-10" />
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="my-8 border-t border-gray-700"></div>

  {/* Bottom Part */}
  <div className="text-center">
    <div className="flex justify-center items-center mb-5">
    <img
      src="/proctrl-logo.png"
      alt="ProCtrl logo"
      className="w-[130px] rounded-md shadow-sm"
    />
    </div>
    <p className="text-sm text-gray-400 text-center">
      Copyright © 2025 ProCtrl. All Rights Reserved.
    </p>
    <div className="flex gap-3 text-center justify-center mt-4">
  <a href="#" className="bg-pink-500 p-2 rounded-full text-white">
    <FaFacebookF className="text-sm" />
  </a>
  <a href="#" className="bg-pink-500 p-2 rounded-full text-white">
    <FaInstagram className="text-sm" />
  </a>
  <a href="#" className="bg-pink-500 p-2 rounded-full text-white">
    <FaXTwitter className="text-sm" />
  </a>
  <a href="#" className="bg-pink-500 p-2 rounded-full text-white">
    <FaTiktok className="text-sm" />
  </a>
</div>

  </div>

  {/* Scroll Up Button */}
  {/* <div className="fixed bottom-4 right-4">
    <button className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full shadow-lg transition">
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div> */}
</footer>

  );
};

export default Footer;
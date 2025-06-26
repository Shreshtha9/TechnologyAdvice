import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0E1F1C] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm border-b border-gray-700 pb-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#ffd800]">About Us</a></li>
            <li>
              <a href="#" className="hover:text-[#ffd800] flex items-center gap-2">
                Careers
                <span className="bg-[#ffd800] text-black px-3 py-1 rounded-full text-xs font-bold">
                  We're Hiring
                </span>
              </a>
            </li>
            <li><a href="#" className="hover:text-[#ffd800]">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">Partner With Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#ffd800]">Marketing Solutions</a></li>
            <li><a href="#" className="hover:text-[#ffd800]">Our Audience</a></li>
            <li><a href="#" className="hover:text-[#ffd800]">Customer Stories</a></li>
            <li><a href="#" className="hover:text-[#ffd800]">B2B Nation</a></li>
            <li><a href="#" className="hover:text-[#ffd800]">List Your Product</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#ffd800]">Terms of Use</a></li>
            <li><a href="#" className="hover:text-[#ffd800]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#ffd800]">California – Do Not Sell My Info</a></li>
          </ul>
         
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Technology Advice"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-[#ffd800] hover:text-black transition">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-[#ffd800] hover:text-black transition">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-[#ffd800] hover:text-black transition">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Cookie Info */}
      <p className="max-w-5xl mx-auto text-center text-xs text-gray-300 mt-6 px-4">
        We use cookies and other data collection technologies to provide the best experience for our customers. 
        You may request that your data not be shared with third parties here: 
        <a href="#" className="text-[#ffd800] font-bold ml-1 hover:underline">Do Not Sell My Data.</a>
      </p>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400 mt-4">
        © 2025 TechnologyAdvice
      </p>
    </footer>
  );
}